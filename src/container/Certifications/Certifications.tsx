import Link from "next/link";
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import { AppWrap, MotionWrap } from "@app/wrapper";

import { certifications } from "./data";
import { TabFilterContainer } from "@app/components/TabFilter/TabFilterContainer";
import Certification from "@app/components/Certification/Certification";

const Certifications = () => {
  return (
    <>
      <h2 className="mb-10 head-text mt-4">Certifications</h2>

      <TabFilterContainer items={certifications} isDisabledAnimation={false}>
        {(item) => <Certification key={item.title} {...item} />}
      </TabFilterContainer>

      <Link
        href="/certifications"
        target="_blank"
        className="bg-transparent mt-8 hover:bg-primary/100 text-gray-800 font-semibold hover:text-white py-2 px-8 border border-gray-400 hover:border-transparent rounded-full"
      >
        <div className="app__flex gap-2">
          Show More Certifications <AiOutlineArrowRight />
        </div>
      </Link>
    </>
  );
};

export default AppWrap(MotionWrap(Certifications), "certifications", "bg-white");
