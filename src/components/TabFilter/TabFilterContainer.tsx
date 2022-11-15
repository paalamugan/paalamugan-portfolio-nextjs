import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TabFilter } from "./TabFilter";

interface ITab {
  id: string;
  name: string;
}

interface ITabFilterContainerProps<
  TItem extends unknown & { tags: ITab["id"][] },
  TTab extends ITab,
> {
  items: ReadonlyArray<TItem> | Array<TItem>;
  tabs?: ReadonlyArray<TTab> | Array<TTab>;
  isDisabledAnimation?: boolean;
  children: (item: TItem) => JSX.Element;
}

export const TabFilterContainer = <
  TItem extends unknown & { tags: ITab["id"][] },
  TTab extends ITab,
>({
  items,
  tabs,
  isDisabledAnimation,
  children,
}: ITabFilterContainerProps<TItem, TTab>) => {
  const [activeFilter, setActiveFilter] = useState(tabs?.[0] || { id: "all", name: "All" });
  const [filteredItems, setFilteredItems] = useState<TItem[]>([...items]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const isDisabledAnimate = isDisabledAnimation != null ? isDisabledAnimation : false;
  const className = "flex flex-wrap justify-center items-stretch gap-2";

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (activeFilter.id === "all") {
        setFilteredItems([...items]);
      } else {
        setFilteredItems(items.filter((item) => item.tags.includes(activeFilter.id)));
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [items, activeFilter]);

  const handleWorkFilter = (item: TTab) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
  };

  return (
    <>
      {!!tabs && <TabFilter tabs={tabs} onTabClick={handleWorkFilter} />}
      {isDisabledAnimate ? (
        <div className={className}>{filteredItems.map((item) => children(item))}</div>
      ) : (
        <motion.div
          className={className}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          {filteredItems.map((item) => children(item))}
        </motion.div>
      )}
    </>
  );
};
