# Hannah Beauty Blog (blog.hannahbeauty.co.nz)

Hannah Beauty 메인 사이트 디자인(레드 #C8352E + 흑백 + 대문자 타이포)을 그대로 적용한
아카데미 블로그입니다. Next.js 14 + Tailwind, MDX 파일 기반 (CMS 불필요).

## 로컬 실행

```bash
npm install
npm run dev   # http://localhost:3000
```

## 새 글 올리는 법 (코드 수정 불필요)

`content/` 폴더에 `.mdx` 파일을 하나 만들면 끝:

```
---
title: "글 제목"
date: "2026-07-25"
category: "Brows"          # Academy / Brows / Lips / SMP / Free Resource 등
excerpt: "목록에 보이는 한 줄 요약"
cover: "/covers/파일명.jpg"  # 선택사항. public/covers/ 에 이미지 넣기
---

본문을 마크다운으로 작성...
```

파일명이 곧 URL이 됩니다: `content/my-post.mdx` → blog.hannahbeauty.co.nz/my-post
git push 하면 Vercel이 자동 재배포합니다 (Signal Note와 동일).

## 배포 순서

1. GitHub에 새 저장소 만들고 push
2. Vercel → Add New → Project → 저장소 Import → Deploy
3. Vercel 프로젝트 → Settings → Domains → `blog.hannahbeauty.co.nz` 추가
4. 도메인 DNS 관리 페이지에서 CNAME 레코드 추가:
   - Type: CNAME / Name: blog / Value: cname.vercel-dns.com
   - 기존 레코드는 절대 건드리지 말 것 (추가만!)
5. 아들에게 부탁: 메인 사이트 BLOG 메뉴 링크를 https://blog.hannahbeauty.co.nz 로 변경

## 커스터마이징 지점

- 레드 색상 미세조정: `tailwind.config.ts` 의 `primary` 값
  (메인 사이트에서 F12 → 배너 검사 → background-color 값 확인)
- 메인 사이트 링크 경로: `components/site-header.tsx` 의 `MAIN` 상수와 nav 배열
  (SERVICES, BOOK 의 실제 URL 경로가 다르면 여기서 수정)
- 인스타 링크: `components/site-footer.tsx`

## 인스타 DM 자동화 연결

ManyChat 버튼 → 아래 URL로 연결:
- PMU 창업 가이드(리드마그넷): /pmu-career-starter-guide
- 아카데미 안내: /how-to-become-a-pmu-artist-in-nz
- 눈썹 시술 안내: /nano-hairstroke-brows-what-to-know
- 예약: https://www.hannahbeauty.co.nz (BOOK 페이지)
