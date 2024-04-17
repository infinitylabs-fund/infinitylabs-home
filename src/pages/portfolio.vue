<template>
  <div class="portfolio">
    <div class="portfolioContent">
      <h3>Our Investments</h3>
      <ul>
        <li
          v-for="(item) in Investments"
          :key="item.id"
         
          @click="toLink(item.link)"
        >
          <img  :src="item.logo_T" alt="" />
          <h5>{{ item.label }}</h5>
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Investments: [
        {
          id: "1",
          logo_T: "/static/image/Crust.png",
          label: "Crust",
          text: "Chain to Decentralized Cloud",
          ishover: false,
          link: "https://crust.network/",
        },
        {
          id: "2",
          logo_T: "/static/image/Ton.svg",
          label: "TON",
          text: "A decentralized and open internet, created by the community using a technology designed by Telegram",
          ishover: false,
          link: "https://ton.org/",
        },
        {
          id: "3",
          logo_T: "/static/image/Phala.png",
          label: "Phala",
          text: "A Web3.0 Community-driven network",
          ishover: false,
          link: "https://phala.network/zh",
        },
        {
          id: "4",
          logo_T: "/static/image/SubDAO.png",
          label: "SubDAO",
          text:
            "A DAO infrastructure based on Polkadot, where any decentralized organization is allowed to conveniently create and manage a DAO.",
          ishover: false,
          link: "https://www.subdao.network/",
        },
        {
          id: "5",
          logo_T: "/static/image/NOTE.png",
          label: "NOTE",
          text:
            "Dividendable digital securities issued for Republic Core, a US equity crowdfunding platform",
          ishover: false,
          link: "https://republic.co/note",
        },
        {
          id: "6",
          logo_T: "/static/image/DoraFactory.png",
          label: "Dora Factory",
          text:
            "Build an open DAO-as-a-Service infrastructure for on-chain governance and open source ventures.",
          ishover: false,
          link: "https://hackerlink.io/",
        },
        {
          id: "7",
          logo_T: "/static/image/Clover.png",
          label: "Clover",
          text: "A foundational layer for Cross‑Chain compatibility",
          ishover: false,
          link: "https://clover.finance/",
        },
        {
          id: "8",
          logo_T: "/static/image/SAITO.png",
          label: "SAITO",
          text:
            "Fixes the collective action problems by coupling a circular ledger to a consensus mechanism that incentivizes the collection and sharing of transaction fees",
          ishover: false,
          link: "https://saito.io/",
        },
        {
          id: "9",
          logo_T: "/static/image/X_Predict.png",
          label: "X-Predict",
          text:
            "A decentralized cross-chain prediction platform designed to provide diversified, automated, safety-oriented, high-yield, socialized forecasting services.",
          ishover: false,
          link: "https://x-predict.com/",
        },
        {
          id: "10",
          logo_T: "/static/image/CCFOX.png",
          label: "CCFOX",
          text:
            "Crypto derivatives trading platform forged by financial institution and stock market professionals for global traders.",
          ishover: false,
          link: "https://www.ccfox.com/",
        },
        {
          id: "11",
          logo_T: "/static/image/NFTScan.png",
          label: "NFTScan",
          text:
            "NFTScan is a professional NFT explorer and data open platform.",
          ishover: false,
          link: "https://www.nftscan.com",
        },
        {
          id: "12",
          logo_T: "/static/image/Bitscrush.png",
          label: "Bitscrush",
          text:
            "Enabling, Engaging & Empowering Big NFT",
          ishover: false,
          link: "https://bitscrunch.com",
        },
        {
          id: "13",
          logo_T: "/static/image/Matters.png",
          label: "Matters",
          text:
            "A Web3 social media ecosystem that lets users collaboratively create and monetize digital assets with complete control.",
          ishover: false,
          link: "https://matters-lab.io",
        },
        {
          id: "14",
          logo_T: "/static/image/Metaloop.png",
          label: "Metaloop",
          text:
            "NFT Games Launchpad",
          ishover: false,
          link: "https://metalooptech.com/",
        },
        {
          id: "15",
          logo_T: "/static/image/Oneland.png",
          label: "Oneland",
          text:
            "One-Stop Financial Platform for Virtual Lands in the Metaverse",
          ishover: false,
          link: "https://oneland.world/#",
        },
        {
          id: "16",
          logo_T: "/static/image/tarplayer.ico",
          label: "terplayer",
          text:
            "A data interpreter protocol operating on the Bitcoin network",
          ishover: false,
          link: "https://terplayer.org",
        },
        {
          id: "17",
          logo_T: "/static/image/Wowfish.png",
          label: "WowFish",
          text:
            "The First Social Fishing Game Based on TON",
          ishover: false,
          link: "https://www.wowfish.io/#/Home",
        },
        {
          id: "18",
          logo_T: "/static/image/tradoor.svg",
          label: "Traddor",
          text:
            "Tradoor is a NDMM exchange.",
          ishover: false,
          link: "https://tradoor.io",
        },
        {
          id: "19",
          logo_T: "/static/image/boom up.png",
          label: "Boom Up",
          text:
            "A gaming ,combines social interaction, randomness, and strong profitability",
          ishover: false,
          link: "https://www.boomup.fun",
        },
        {
          id: "20",
          logo_T: "/static/image/bountybay.jpg",
          label: "Bounty bay",
          text:
            "Web3 x AI Social Commerce Platform",
          ishover: false,
          link: "https://t.me/bountybaycommunity",
        },
        {
          id: "21",
          logo_T: "/static/image/anome.webp",
          label: "Anome",
          text:
            "An issuance and lending protocol for the new generation game asset NFTs",
          ishover: false,
          link: "https://www.anome.xyz/home",
        },
        
      ],
    };
  },
  methods: {
    //跳转链接
    toLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style>
</style>