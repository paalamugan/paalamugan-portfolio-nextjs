import { certifications, certificationTabs } from "@app/constants/certifications";
import Certification from "@app/components/Certification/Certification";
import { MotionWrap } from "@app/wrapper";
import { TabFilterContainer } from "@app/components/TabFilter/TabFilterContainer";
import { GotoTopButton } from "@app/components";

const CertificationsPageComponent = () => {
  return (
    <>
      <h2 className="head-text mt-8">Certifications</h2>

      <TabFilterContainer items={certifications} tabs={certificationTabs}>
        {(item) => <Certification key={item.title} {...item} />}
      </TabFilterContainer>

      <GotoTopButton />
    </>
  );
};

export default MotionWrap(CertificationsPageComponent, "app__flex flex-col mb-12");
