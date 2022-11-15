import { useState } from "react";
import style from "./TabFilter.module.scss";

interface ITab {
  id: string;
  name: string;
}

interface TabFilterProps<TTab extends ITab> {
  tabs: ReadonlyArray<TTab> | Array<TTab>;
  onTabClick: (tab: TTab) => void;
}

export const TabFilter = <TTab extends ITab>({ tabs, onTabClick }: TabFilterProps<TTab>) => {
  const [activeFilter, setActiveFilter] = useState<string>(tabs[0].id);

  const onHandleTabFilter = (tab: TTab) => {
    setActiveFilter(tab.id);
    onTabClick(tab);
  };

  return (
    <div className={`${style["app__tab-filter"]} mt-4 mb-5`}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => onHandleTabFilter(tab)}
          className={`${style["app__tab-filter-item"]} app__flex p-text ${
            activeFilter.includes(tab.id) ? style["app__tab-filter-item-active"] : ""
          }`}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
};
