import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface TemplateCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  demoUrl: string;
}

const TemplateCard = ({ template }: { template: TemplateCardProps }) => {
  const { id, name, description, image, demoUrl } = template;
  return (
    <Card className="w-full max-w-sm transition-transform hover:scale-105">
      <CardHeader className="p-0">
        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={`${name} template preview`}
            className="h-full w-full object-cover"
            width={200}
            height={200}
          />
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="mb-2 text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>

      <CardFooter className="flex justify-between gap-2 p-4">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <a href={demoUrl} target="_blank">
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        </Button>

        <Button className="flex items-center gap-2">
          <Link href={`/dashboard/templates/${id}`}>
            <Copy className="h-4 w-4" />
            Use Template
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TemplateCard;
