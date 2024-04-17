<template>
  <div class="portfolio">
    <div class="portfolioContent">
      <h3>Our Investments</h3>
      <ul>
        <li
          v-for="(item, index) in Investments"
          :key="item.id"
          @mouseover="showLogo(1, index)"
          @mouseout="showLogo(0, index)"
          @click="toLink(item.link)"
        >
          <img v-show="item.ishover" :src="item.logo_T" alt="" />
          <img v-show="!item.ishover" :src="item.logo_F" alt="" />
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
          logo_F: "/static/image/CrustF.png",
          label: "Crust",
          text: "Chain to Decentralized Cloud",
          ishover: false,
          link: "https://crust.network/",
        },
        {
          id: "2",
          logo_T: "/static/image/Phala.png",
          logo_F: "/static/image/PhalaF.png",
          label: "Phala",
          text: "A Web3.0 Community-driven network",
          ishover: false,
          link: "https://phala.network/zh",
        },
        {
          id: "3",
          logo_T: "/static/image/SubDAO.png",
          logo_F: "/static/image/SubDAOF.png",
          label: "SubDAO",
          text:
            "A DAO infrastructure based on Polkadot, where any decentralized organization is allowed to conveniently create and manage a DAO.",
          ishover: false,
          link: "https://www.subdao.network/",
        },
        {
          id: "4",
          logo_T: "/static/image/NOTE.png",
          logo_F: "/static/image/NOTEF.png",
          label: "NOTE",
          text:
            "Dividendable digital securities issued for Republic Core, a US equity crowdfunding platform",
          ishover: false,
          link: "https://republic.co/note",
        },
        {
          id: "5",
          logo_T: "/static/image/Sifchain.png",
          logo_F: "/static/image/SifchainF.png",
          label: "Sifchain",
          text: "The world’s first omni-chain decentralized exchange",
          ishover: false,
          link: "https://sifchain.finance/",
        },
        {
          id: "6",
          logo_T: "/static/image/DoraFactory.png",
          logo_F: "/static/image/DoraFactoryF.png",
          label: "Dora Factory",
          text:
            "Build an open DAO-as-a-Service infrastructure for on-chain governance and open source ventures.",
          ishover: false,
          link: "https://hackerlink.io/",
        },
        {
          id: "7",
          logo_T: "/static/image/Clover.png",
          logo_F: "/static/image/CloverF.png",
          label: "Clover",
          text: "A foundational layer for Cross‑Chain compatibility",
          ishover: false,
          link: "https://clover.finance/",
        },
        {
          id: "8",
          logo_T: "/static/image/Parasset.png",
          logo_F: "/static/image/ParassetF.png",
          label: "Parasset",
          text: "Parallel asset based on NEST decentralized predictors",
          ishover: false,
          link: "https://www.parasset.top/#/home",
        },
        {
          id: "9",
          logo_T: "/static/image/SAITO.png",
          logo_F: "/static/image/SAITOF.png",
          label: "SAITO",
          text:
            "Fixes the collective action problems by coupling a circular ledger to a consensus mechanism that incentivizes the collection and sharing of transaction fees",
          ishover: false,
          link: "https://saito.io/",
        },
        {
          id: "10",
          logo_T: "/static/image/X_Predict.png",
          logo_F: "/static/image/X_PredictF.png",
          label: "X-Predict",
          text:
            "A decentralized cross-chain prediction platform designed to provide diversified, automated, safety-oriented, high-yield, socialized forecasting services.",
          ishover: false,
          link: "https://x-predict.com/",
        },
        {
          id: "11",
          logo_T: "/static/image/CCFOX.png",
          logo_F: "/static/image/CCFOXF.png",
          label: "CCFOX",
          text:
            "Crypto derivatives trading platform forged by financial institution and stock market professionals for global traders.",
          ishover: false,
          link: "https://www.ccfox.com/",
        },
        {
          id: "12",
          logo_T: "/static/image/BEST.png",
          logo_F: "/static/image/BESTF.png",
          label: "BEST",
          text:
            "Bitcoin And Ethereum Standard Token.Make Mining Easy. Everyone Can Participate.",
          ishover: false,
          link: "https://bestokens.network/index",
        },
      ],
    };
  },
  methods: {
    //鼠标效果
    showLogo(num, index) {
      this.Investments[index].ishover = num ? true : false;
    },
    //跳转链接
    toLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style>
</style>