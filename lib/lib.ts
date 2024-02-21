type SectionProps<SectionData, SectionCustom extends object | undefined = undefined> = {
  data: SectionData;
  custom: {
    gtm_reference: string;
  } & (SectionCustom extends undefined ? {} : SectionCustom);
}