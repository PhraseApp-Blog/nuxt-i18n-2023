export const title = (pageTitle: string): string => {
  const { t } = useI18n()

  return `${pageTitle} | ${t("app_title")}`
}
