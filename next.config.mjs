/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * 삭제한 글의 주소가 404 가 되지 않게 넘겨준다.
   *
   * 이미 공개돼 있던 주소라 검색엔진 색인이나 누군가의 북마크에 남아 있을 수 있다.
   * 그냥 지우면 죽은 링크가 되므로, 내용이 가장 가까운 곳으로 영구 이동시킨다.
   * permanent: true 는 308 을 내보내며, 검색엔진에 "여기로 옮겼다"고 알린다.
   */
  async redirects() {
    return [
      {
        // 아카데미 유입용 글이었으므로 살아 있는 아카데미 글로 보낸다
        source: "/pmu-career-starter-guide",
        destination: "/how-to-become-a-pmu-artist-in-nz",
        permanent: true,
      },
      {
        // 나노 헤어스트로크 설명은 본 사이트의 브로우 페이지가 이어받는다.
        // 거기에 같은 기법 설명과 FAQ, 가격이 모두 있다.
        source: "/nano-hairstroke-brows-what-to-know",
        destination: "https://www.hannahbeauty.co.nz/brows",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
