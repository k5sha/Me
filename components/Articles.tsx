"use client";

import { FiClock, FiExternalLink, FiBookOpen } from "react-icons/fi";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { Skeleton } from "@heroui/skeleton";

interface MediumArticle {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  categories: string[];
}

export function MediumArticles() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@k5sha`
        );
        const data = await response.json();

        if (data.status === "ok") {
          setArticles(data.items);
        } else {
          setError("Failed to fetch articles");
        }
      } catch (err) {
        setError("Error fetching articles");
      } finally {
        setLoading(false);
      }
    };

    fetchMediumArticles();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-8 md:grid-cols-2">
        {[...Array(2)].map((_, i) => (
          <Card
            key={i}
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Skeleton className="w-12 h-12 rounded-lg" />
                  <Skeleton className="h-6 w-32" />
                </div>
                <Skeleton className="h-6 w-48 mb-4" />
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
                <Skeleton className="h-10 w-32 mt-6 rounded-lg" />
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-8">
                <Skeleton className="w-full h-64 rounded-xl" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4">{error}</p>
        <Button
          as={Link}
          color="primary"
          endContent={<FiExternalLink />}
          href="https://medium.com/@k5sha"
          rel="noopener noreferrer"
          target="_blank"
          variant="solid"
        >
          Visit My Medium
        </Button>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <FiBookOpen className="mx-auto text-4xl text-gray-400 mb-4" />
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          No articles found
        </p>
        <Button
          as={Link}
          color="primary"
          endContent={<FiExternalLink />}
          href="https://medium.com/@k5sha"
          rel="noopener noreferrer"
          target="_blank"
          variant="solid"
        >
          Visit My Medium
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {articles.slice(0, 2).map((article) => (
        <ArticleCard key={article.guid} article={article} />
      ))}
    </div>
  );
}

function ArticleCard({ article }: { article: MediumArticle }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const extractReadTime = (content: string) => {
    const match = content.match(/<li>(\d+ min read)<\/li>/);

    return match ? match[1] : "6 min read";
  };

  return (
    <Card className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-indigo-500 flex items-center justify-center">
              <FiBookOpen className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold">Medium Article</h3>
          </div>

          <h2 className="text-2xl font-bold mb-4 line-clamp-2">
            {article.title}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
            {article.description.replace(/<[^>]+>/g, "")}
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1">
              <FiClock size={14} />
              {extractReadTime(article.content)}
            </span>
            <span>•</span>
            <span>{formatDate(article.pubDate)}</span>
          </div>

          {article.categories && article.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.categories.slice(0, 3).map((tag, index) => (
                <Chip key={index} size="sm" variant="flat">
                  {tag}
                </Chip>
              ))}
            </div>
          )}

          <Button
            as={Link}
            className="mt-6 w-fit"
            color="primary"
            endContent={<FiExternalLink />}
            href={article.link}
            rel="noopener noreferrer"
            target="_blank"
            variant="solid"
          >
            Read Article
          </Button>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-8">
          <Image
            alt={article.title}
            className="rounded-xl shadow-xl"
            fallbackSrc="https://mailtrap.io/wp-content/uploads/2019/08/How-to-Send-and-Receive-Emails-with-Go_Featured-Image-520x270.png"
            src={
              article.thumbnail ||
              "https://mailtrap.io/wp-content/uploads/2019/08/How-to-Send-and-Receive-Emails-with-Go_Featured-Image-520x270.png"
            }
          />
        </div>
      </div>
    </Card>
  );
}
