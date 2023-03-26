import Link from "next/link";
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import { AppWrap, MotionWrap } from "@app/wrapper";

import { certifications } from "./data";
import { TabFilterContainer } from "@app/components/TabFilter/TabFilterContainer";
import Certification from "@app/components/Certification/Certification";
import { ShowMoreLink } from "@app/components/ShowMoreLink/ShowMoreLink";

const Certifications = () => {
  return (
    <>
      <h2 className="mb-10 head-text mt-4">Certifications</h2>

      <TabFilterContainer items={certifications} isDisabledAnimation={false}>
        {(item) => <Certification key={item.title} {...item} />}
      </TabFilterContainer>

      <ShowMoreLink href="/certifications" label="Certifications" />
    </>
  );
};

export default AppWrap(MotionWrap(Certifications), "certifications", "bg-white");
