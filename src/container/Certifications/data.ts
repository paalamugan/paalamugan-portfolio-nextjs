import style from "./Certification.module.scss";

import GoogleCloudFundamentalsCoreInfrastructure from "@app/assets/certifications/google-cloud-fundamentals-core-infrastructure.png";
import CloudEngineering from "@app/assets/certifications/cloud-engineering.png";
import GoogleCloudEssentials from "@app/assets/certifications/google-cloud-essentials.png";
import DialogflowES from "@app/assets/certifications/dialogflow-es.png";
import DialogflowCX from "@app/assets/certifications/dialogflow-cx.png";
import ApigeeApi from "@app/assets/certifications/apigee-api.png";
import ApigeeApiSecurity from "@app/assets/certifications/apigee-api-security.png";
import ApigeeApiDesign from "@app/assets/certifications/apigee-api-design.png";
import ContactCenterAI from "@app/assets/certifications/contact-center-ai.png";
import WebsiteGoogleCloud from "@app/assets/certifications/website-google-cloud.png";
import NodejsIntroductoryCourse from "@app/assets/certifications/nodejs-introductory-course.jpg";

export const certifications = [
  {
    title: "NodeJS Introductory Course",
    image: NodejsIntroductoryCourse,
    className: "rounded-lg",
    url: "https://courses.nodejsacademy.com/certificates/a0vnqxnfhv",
  },
  {
    title: "Google Cloud Fundamentals: Core Infrastructure",
    image: GoogleCloudFundamentalsCoreInfrastructure,
    url: "https://partner.cloudskillsboost.google/public_profiles/30b21e32-378e-4044-baee-cd872fa2659d/badges/1801217",
  },
  {
    title: "Cloud Engineering",
    image: CloudEngineering,
    url: "https://partner.cloudskillsboost.google/public_profiles/30b21e32-378e-4044-baee-cd872fa2659d/badges/1791116",
  },
  {
    title: "Google Cloud Essentials",
    image: GoogleCloudEssentials,
    url: "https://partner.cloudskillsboost.google/public_profiles/30b21e32-378e-4044-baee-cd872fa2659d/badges/1790377",
  },
  {
    title: "Website on Google Cloud",
    image: WebsiteGoogleCloud,
    url: "https://partner.cloudskillsboost.google/public_profiles/30b21e32-378e-4044-baee-cd872fa2659d/badges/1579191",
  },
  {
    title: "Virtual Agent Development in Dialogflow ES for Software Devs",
    image: DialogflowES,
    url: "https://partner.cloudskillsboost.google/public_profiles/30b21e32-378e-4044-baee-cd872fa2659d/badges/1781256",
  },
  {
    title: "Virtual Agent Development in Dialogflow CX for Software Devs",
    image: DialogflowCX,
    url: "https://partner.cloudskillsboost.google/public_profiles/30b21e32-378e-4044-baee-cd872fa2659d/badges/1781033",
  },
  {
    title: "API Development on Google Cloud's Apigee API Platform",
    image: ApigeeApi,
    url: "https://partner.cloudskillsboost.google/public_profiles/30b21e32-378e-4044-baee-cd872fa2659d/badges/1761832",
  },
  {
    title: "API Security on Google Cloud's Apigee API Platform (C2)",
    image: ApigeeApiSecurity,
    url: "https://partner.cloudskillsboost.google/public_profiles/30b21e32-378e-4044-baee-cd872fa2659d/badges/1752128",
  },
  {
    title: "API Design and Fundamentals of Google Cloud's Apigee API Platform",
    image: ApigeeApiDesign,
    url: "https://partner.cloudskillsboost.google/public_profiles/30b21e32-378e-4044-baee-cd872fa2659d/badges/1740756",
  },
  {
    title: "Customer Experiences with Contact Center AI",
    image: ContactCenterAI,
    className: style["certificate-border"],
    url: "https://partner.cloudskillsboost.google/public_profiles/30b21e32-378e-4044-baee-cd872fa2659d/badges/1588411",
  },
];
