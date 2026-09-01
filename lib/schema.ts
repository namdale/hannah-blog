/**
 * 블로그용 JSON-LD 구조화 데이터.
 *
 * 핵심은 사업장 노드의 @id 를 본 사이트(www.hannahbeauty.co.nz)와
 * **똑같이** 쓰는 것입니다. 그래야 검색엔진과 AI 크롤러가
 * "blog.hannahbeauty.co.nz 의 글 = 오클랜드 마운트에덴 Hannah Beauty 가 쓴 글"
 * 로 연결합니다. 다른 @id 를 쓰면 두 사이트가 서로 남남이 됩니다.
 *
 * 사업 정보가 바뀌면 본 사이트의 src/constants/site.js 와 여기를 함께 고쳐야 합니다.
 */

import type { PostMeta } from "./posts";

export const MAIN_SITE = "https://www.hannahbeauty.co.nz";
export const BLOG_SITE = "https://blog.hannahbeauty.co.nz";

/** 본 사이트와 공유하는 사업장 식별자. 절대 바꾸지 마세요. */
export const BUSINESS_ID = `${MAIN_SITE}/#business`;

/**
 * 사업장 노드.
 * 본 사이트에 전체 정보(가격·시술 목록·FAQ)가 있으므로
 * 여기서는 신원 확인에 필요한 최소 정보만 둡니다.
 */
export function businessNode() {
  return {
    "@type": ["BeautySalon", "HealthAndBeautyBusiness"],
    "@id": BUSINESS_ID,
    name: "Hannah Beauty",
    alternateName: ["Hannah Beauty NZ", "Hannah Beauty Academy"],
    url: MAIN_SITE,
    logo: `${MAIN_SITE}/images/logo_clear.png`,
    image: `${MAIN_SITE}/images/logo_clear.png`,
    telephone: "+64 27 659 2705",
    foundingDate: "2018-01",
    knowsLanguage: ["en", "ko"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Horoeka Avenue",
      addressLocality: "Mount Eden",
      addressRegion: "Auckland",
      postalCode: "1024",
      addressCountry: "NZ",
    },
    areaServed: [
      "Mount Eden",
      "Auckland",
      "Epsom",
      "Balmoral",
      "Sandringham",
      "Newmarket",
      "Kingsland",
    ].map((name) => ({ "@type": "Place", name })),
    sameAs: [
      "https://www.instagram.com/hannah_beauty_nz/",
      "https://www.instagram.com/hannah_beauty_smp/",
      BLOG_SITE,
    ],
  };
}

/** 블로그 자체를 하나의 Blog 로 선언하고, 발행자를 사업장에 연결 */
export function blogNode() {
  return {
    "@type": "Blog",
    "@id": `${BLOG_SITE}/#blog`,
    url: BLOG_SITE,
    name: "Hannah Beauty Blog",
    description:
      "Permanent makeup guides, education and academy insights from Hannah Beauty, Mt Eden, Auckland.",
    inLanguage: "en-NZ",
    publisher: { "@id": BUSINESS_ID },
  };
}

/** 개별 글 */
export function postNode(post: PostMeta) {
  const url = `${BLOG_SITE}/${post.slug}`;
  return {
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    inLanguage: "en-NZ",
    isPartOf: { "@id": `${BLOG_SITE}/#blog` },
    author: { "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
    ...(post.cover
      ? { image: post.cover.startsWith("http") ? post.cover : `${BLOG_SITE}${post.cover}` }
      : {}),
  };
}

/** @graph 로 감싸 하나의 JSON-LD 로 만든다 */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/**
 * HTML 에 넣을 문자열.
 * </script> 가 본문에 들어가 태그가 조기 종료되는 것을 막기 위해 < 를 이스케이프한다.
 */
export function jsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
