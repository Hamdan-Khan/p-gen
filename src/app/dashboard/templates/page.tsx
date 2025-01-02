import TemplateCard, {
  TemplateCardProps,
} from "@/components/templates/TemplateCard";

const templates: TemplateCardProps[] = [
  {
    id: "1",
    demoUrl: "https://academicpages.github.io",
    description: "Academic Pages",
    image:
      "https://raw.githubusercontent.com/Hamdan-Khan/academicpages/refs/heads/master/images/homepage.png?token=GHSAT0AAAAAACZ7CF67OPQEEA6AACZ7WEUYZ3WWSWA",
    name: "Academic Pages",
  },
];

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-2xl font-semibold">Templates</h1>
      {templates.map((t) => {
        return <TemplateCard key={t.id} template={t} />;
      })}
    </div>
  );
}
