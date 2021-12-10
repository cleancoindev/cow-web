import Head from 'next/head'
import Link from 'next/link'

import { batches } from '../const/batches'
import Layout from '../components/Layout'
import { ExternalLink } from '../const/styles/global'
import { ButtonWrapper } from '../components/Button'
import CowSlider from '../components/CowSlider'
import { Section, SubTitle, ScrollDownButton, SectionImage, IconList, IconListItem, Metrics, CheckList, SocialList, ApiTool, ApiUrl, ApiOutput, ApiParams } from '../const/styles/pages/index'

// import { Trans } from '@lingui/macro'
import { SiteConfig } from '../const/meta'
import metrics from '../const/metrics'
import Button from '../components/Button'

export default function Home({ batchesData, metricsData, siteConfigData }) {
  const { title, descriptionShort, social } = siteConfigData

  return (
    <Layout>

      <Head>
        <title>{title} - {descriptionShort}</title>
      </Head>

      {/* Hero/1st section */}
      <Section hero>
        <div>
          <h1>DeFi liquidity protocol with
            MEV protection</h1>
          <SubTitle lineHeight={2}>COW Protocol enables top DeFi rates with MEV protection by settling orders using batch settlements and leverages P2P (CoW) orders in combination with fallback liquidity from AMMs and DEX aggregators.</SubTitle>

          <ButtonWrapper>
            <Button hasLink><Link href="/">API Docs</Link></Button>
            <Button variant='white' hasLink><a href="https://dune.xyz/CryptoOrca/GP" target="_blank" rel="noopener nofollow">Analytics</a>  </Button>
          </ButtonWrapper>
        </div>
        <div>
          <CowSlider batches={batchesData} />
        </div>
        <ScrollDownButton>Scroll down</ScrollDownButton>
      </Section>

      {/* 2nd section */}
      <Section flow={'column'}>
        <div>
          <SectionImage margin={'0 auto -18rem'} height={'68rem'}><img loading="lazy" src="/images/cowBelt.jpg" /></SectionImage>
          <h2>A fast growing protocol</h2>
          <SubTitle align="center">Getting you better prices, zero revert rates, <br />MEV protection and gas costs savings. <ExternalLink href="#">View analytics</ExternalLink></SubTitle>
          <Metrics>
            {metricsData.map(({ label, value }, i) =>
              <div key={i}>
                <b>{value}</b>
                <i>{label}</i>
              </div>
            )}
          </Metrics>
        </div>
      </Section>

      {/* 3rd section */}
      <Section flow={'column'} fullWidth>
        <div>
          <SectionImage margin={'0 auto -6rem'}><img loading="lazy" src="/images/barn.jpg" /></SectionImage>
          <h3>More than a meta DEX aggregator</h3>
          <IconList>

            <IconListItem icon="images/icons/equal.svg">
              <span>
                <b>Uniform clearing prices</b>
                <p>Using <Link href="/">batch auctions</Link>, all trades within the same block are guaranteed to receive the same price regardless of their execution order.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/puzzle.svg">
              <span>
                <b>Superior on-chain DeFi liquidity</b>
                <p>All on-chain liquidity sources are continiously integrated which allows for getting the best on-chain prices.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/relation.svg">
              <span>
                <b>P2P Trades (CoW)</b>
                <p>Direct P2P liquidity matching improves prices while adding fairness for the users.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/timeMoney.svg">
              <span>
                <b>JIT (Just in time) Price</b>
                <p>Trades without ETH are made possible by having the solvers use either your sell or buy token, to pay for the transaction fees.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/trading.svg">
              <span>
                <b>Professional trading experience</b>
                <p>Avoid gas overhead and failed transactions with signed meta transactions.  Free signed order cancellations. </p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/gas.svg">
              <span>
                <b>Gas efficient batch orders</b>
                <p>By using batch auctions, trades are bundled together making them much more gas efficient.</p>
              </span>
            </IconListItem>

          </IconList>
        </div>
      </Section>

      {/* 4th section */}
      <Section flow={'column'}>
        <div>
          <h3>The life cycle of a CoW order</h3>
          <SubTitle align='center'>The protocol improves prices for users by batching trades, finding coincidence of wants (CoWs) <br />and tapping into all on chain liquidity - including aggregators. <Link href="#">Read More</Link></SubTitle>
          <SectionImage margin={'0'}><img loading="lazy" src="/images/how-it-works.jpg" /></SectionImage>
        </div>
      </Section>

      {/* 5th section */}
      <Section>
        <div>
          <ApiTool>
            <h4>Get a price quote</h4>

            <ApiParams>
              <span><b>WETH</b><small>sellToken</small></span>
              <span><b>USDC</b><small>buyToken</small></span>
              <span><b>340</b><small>sellAmountBeforeFee</small></span>
            </ApiParams>

            <ApiUrl>
              <b>curl</b>
              <p>https://protocol-mainnet.gnosis.io/api/<span>v1/quote</span></p>
            </ApiUrl>

            <ApiOutput>
              <b>Quoted order response:</b>
              <div>
                <span>curl</span> -X 'POST' \ <br />
                'https://protocol-mainnet.dev.gnosisdev.com/api/v1/quote' \<br />
                -H 'accept: application/json' \<br />
                -H 'Content-Type: application/json' \<br />
                -d '{'{'} <br />
                <span>"sellToken":</span> "0x6810e776880c02933d47db1b9fc05908e5386b96",<br />
                <span>"buyToken":</span> "0x6810e776880c02933d47db1b9fc05908e5386b96",<br />
                <span>"receiver":</span> "0x6810e776880c02933d47db1b9fc05908e5386b96",<br />
                <span>"validTo":</span> 0,<br />
                <span>"appData":</span> "0x0000000000000000000000000000000000000000000000000000000000000000",<br />
                <span>"partiallyFillable":</span> true,<br />
                <span>"sellTokenBalance":</span> "erc20",<br />
                <span>"buyTokenBalance":</span> "erc20",<br />
                <span>"from":</span> "0x6810e776880c02933d47db1b9fc05908e5386b96",<br />
                <span>"kind":</span> "sell",<br />
                <span>"sellAmountBeforeFee":</span> "1234567890"<br />
                {'}'}
              </div>

            </ApiOutput>
          </ApiTool>
        </div>
        <div>
          <SectionImage margin={"0 0 -4rem -1rem"} width={"10rem"} height={"10rem"}>
            <img loading="lazy" src="/images/icons/plug.svg" />
          </SectionImage>

          <h3>Plug-n-play trading protocol with just a few lines of code</h3>
          <SubTitle>Directly interact with the COW protocol to place, manage and settle your orders through a documented API interface.</SubTitle>

          <CheckList>
            <li>Fetch Quotes</li>
            <li>Create and cancel limit orders</li>
            <li>Manage orders accross Ethereum, Rinkeby and XDAI.</li>
          </CheckList>

          <ButtonWrapper>
            <Button><Link href="/">API Docs</Link></Button>
          </ButtonWrapper>
        </div>
      </Section>

      {/* 6th section */}
      <Section flow={'column'} fullWidth>
        <div>
          <SectionImage margin={'0 0 -7rem'} height={'78rem'}>
            <img loading="lazy" src="/images/cow-dark-forest.jpg" />
          </SectionImage>
        </div>

        <div>
          <h3>Your guardian in the dark forest</h3>

          <IconList>
            <IconListItem icon="images/icons/equal.svg">
              <span>
                <b>Uniform clearing prices</b>
                <p>Using <Link href="/">batch auctions</Link>, all trades within the same block are guaranteed to receive the same price regardless of their execution order.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/puzzle.svg">
              <span>
                <b>Superior on-chain DeFi liquidity</b>
                <p>All on-chain liquidity sources are continiously integrated which allows for getting the best on-chain prices.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/relation.svg">
              <span>
                <b>P2P Trades (CoW)</b>
                <p>Direct P2P liquidity matching improves prices while adding fairness for the users.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/relation.svg">
              <span>
                <b>P2P Trades (CoW)</b>
                <p>Direct P2P liquidity matching improves prices while adding fairness for the users.</p>
              </span>
            </IconListItem>
          </IconList>
        </div>
      </Section>

      {/* 7th section */}
      <Section flow={'column'}>
        <div>
          <h3>Join the community</h3>
          <SubTitle align={'center'} maxWidth={62}>Learn more about COW Protocol, chat with the team, others in the community, and have your say in shaping the future of decentralized finance.</SubTitle>
          <SocialList>
            {Object.keys(social).map((item, i) =>
              <li key={i}>
                <a href={social[item].url} target="_blank" rel="noopener nofollow">
                  <img src={`images/icons/${social[item].label.toLowerCase()}.svg`}></img>
                  <b>{social[item].label}</b>
                </a>
              </li>
            )}
          </SocialList>
        </div>
      </Section>

    </Layout >
  )
}

export async function getStaticProps() {
  const siteConfigData = SiteConfig
  const batchesData = batches
  const metricsData = metrics

  return {
    props: { batchesData, metricsData, siteConfigData }
  }
}