import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import Layout from '../components/Layout'
import { ExternalLink } from '../const/styles/global'
import { ButtonWrapper } from '../components/Button'
import CowSlider from '../components/CowSlider'
import { Section, SubTitle, ScrollDownButton, SectionImage, IconList, IconListItem, Metrics, CheckList, ApiTool, ApiUrl, ApiOutput, ApiParams } from '../const/styles/pages/index'
import SocialList from '../components/SocialList'

// import { Trans } from '@lingui/macro'
import { siteConfig } from '../const/meta'
import metrics from '../const/metrics'
import Button from '../components/Button'

export default function Home({ metricsData, siteConfigData }) {
  const { title, descriptionShort, social, url } = siteConfigData

  return (
    <Layout>

      <Head>
        <title>{title} - {descriptionShort}</title>
      </Head>

      {/* Hero/1st section */}
      <Section hero>
        <div>
          <h1>Batch Settlement layer for
            MEV protected trades</h1>
          <SubTitle lineHeight={2}>COW Protocol offers top DeFi rates with MEV protection by leveraging its Batch Settlement layer built on top of AMMs & DEX Aggregatos. This layer allows Solvers to create CoWs (aka Coincidence of Wants) settlements without the need of liquidity pools, or use the pools as fallback mechanism when CoWs can be found.</SubTitle>

          <ButtonWrapper>
            <Button href={url.docs} target="_blank" label="API Docs" />
            <Button variant='white' href={url.analytics} label='Analytics' target="_blank" rel="noopener nofollow" />
          </ButtonWrapper>
        </div>
        <div>
          <CowSlider />
        </div>
        <ScrollDownButton>Scroll down</ScrollDownButton>
      </Section>

      {/* 2nd section */}
      <Section flow={'column'}>
        <div>
          <SectionImage margin={'0 auto -18rem'} height={'68rem'}><img loading="lazy" src="/images/cowBelt.jpg" alt="A fast growing protocol" /></SectionImage>
          <h2>A fast-growing trading protocol</h2>
          <SubTitle align="center">Getting you better prices, MEV Protection, <br />no failed txs and gas costs savings through the batch settlemebt execution model. <ExternalLink href="#">View analytics</ExternalLink></SubTitle>
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
      <Section flow={'column'} fullWidth id="about">
        <div>
          <SectionImage margin={'0 auto -6rem'}><img loading="lazy" src="/images/barn.jpg" alt="Meta DEX Aggregator" /></SectionImage>
          <h3>More than a meta DEX aggregator</h3>
          <IconList>

            <IconListItem icon="images/icons/equal.svg">
              <span>
                <b>Uniform clearing prices</b>
                <p>By using <Link href="/">batch auctions</Link>, all trades within the same block are guaranteed to receive the same price regardless of their execution order.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/puzzle.svg">
              <span>
                <b>Superior on-chain DeFi liquidity</b>
                <p>In order to give the best trading prices, existing and new liquidity sources are continuously being integrated.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/relation.svg">
              <span>
                <b>Coincidence of Wants, CoWs (P2P trades)</b>
                <p>Direct P2P order liquidity matching improves the prices by reducing the need on liquidity pools.</p>
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
                <b>Professional Trading Execution Model</b>
                <p>Avoid any complexities related to gas estimations, failed transactions, or MEV attacks. Simply sign a message to submit a trading order.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/gas.svg">
              <span>
                <b>Gas efficient trades</b>
                <p>By using batch auctions, trades are bundled together making them much more gas efficient.</p>
              </span>
            </IconListItem>

          </IconList>
        </div >
      </Section >

      {/* 4th section */}
      < Section flow={'column'} >
        <div>
          <h3>The life cycle of a CoW order</h3>
          <SubTitle align='center'>The protocol improves prices for users by batching trades, finding coincidence of wants (CoWs) <br />and tapping into all on chain liquidity - including aggregators. <Link href="#">Read More</Link></SubTitle>
          <SectionImage margin={'0'}>
            <a href="/images/how-it-works.jpg" target="_blank" rel="nofollow noopener"><img loading="lazy" src="/images/how-it-works.jpg" alt="How it works" /></a>
            <ButtonWrapper className="mobileOnly"><Button label={'View Full Image'} href="/images/how-it-works.jpg" target="_blank" rel="nofollow noopener" /></ButtonWrapper>
          </SectionImage >
        </div >
      </Section >

      {/* 5th section */}
      < Section mobileSwitchOrder id="developers" >
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
                <span>curl</span> -X &apos;POST&apos; \ <br />
                &apos;https://protocol-mainnet.dev.gnosisdev.com/api/v1/quote&apos; \<br />
                -H &apos;accept: application/json&apos; \<br />
                -H &apos;Content-Type: application/json&apos; \<br />
                -d &apos;{'{'} <br />
                <span>&ldquo;sellToken&ldquo;:</span> &ldquo;0x6810e776880c02933d47db1b9fc05908e5386b96&ldquo;,<br />
                <span>&ldquo;buyToken&ldquo;:</span> &ldquo;0x6810e776880c02933d47db1b9fc05908e5386b96&ldquo;,<br />
                <span>&ldquo;receiver&ldquo;:</span> &ldquo;0x6810e776880c02933d47db1b9fc05908e5386b96&ldquo;,<br />
                <span>&ldquo;validTo&ldquo;:</span> 0,<br />
                <span>&ldquo;appData&ldquo;:</span> &ldquo;0x0000000000000000000000000000000000000000000000000000000000000000&ldquo;,<br />
                <span>&ldquo;partiallyFillable&ldquo;:</span> true,<br />
                <span>&ldquo;sellTokenBalance&ldquo;:</span> &ldquo;erc20&ldquo;,<br />
                <span>&ldquo;buyTokenBalance&ldquo;:</span> &ldquo;erc20&ldquo;,<br />
                <span>&ldquo;from&ldquo;:</span> &ldquo;0x6810e776880c02933d47db1b9fc05908e5386b96&ldquo;,<br />
                <span>&ldquo;kind&ldquo;:</span> &ldquo;sell&ldquo;,<br />
                <span>&ldquo;sellAmountBeforeFee&ldquo;:</span> &ldquo;1234567890&ldquo;<br />
                {'}'}
              </div>

            </ApiOutput>
          </ApiTool>
        </div>
        <div>
          <SectionImage margin={"0 0 -4rem -1rem"} width={"10rem"} height={"10rem"}>
            <img loading="lazy" src="/images/icons/plug.svg" alt="Plug-n-play" />
          </SectionImage >

          <h3>Plug-n-play trading protocol with just a few lines of code</h3>
          <SubTitle>Directly interact with the COW protocol to place, manage and settle your orders through a documented API interface.</SubTitle>

          <CheckList>
            <li>Fetch Quotes</li>
            <li>Create and cancel limit orders</li>
            <li>Manage orders accross Ethereum, Rinkeby and XDAI.</li>
          </CheckList>

          <ButtonWrapper>
            <Button href="/" label="Api Docs" />
          </ButtonWrapper>
        </div >
      </Section >

      {/* 6th section */}
      < Section flow={'column'} fullWidth >
        <div>
          <SectionImage margin={'0 0 -7rem'} height={'78rem'}>
            <img loading="lazy" src="/images/cow-dark-forest.jpg" alt="Guardian in the dark forest" />
          </SectionImage >
        </div >

        <div>
          <h3>Your guardian in the dark forest</h3>

          <IconList>
            <IconListItem icon="images/icons/equal.svg">
              <span>
                <b>MEV Protection </b>
                <p>All CoW Protocol trades are protected from MEV (Miner/Maximal Extractable Value) as the risk is completely absorbed by the solver.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/puzzle.svg">
              <span>
                <b>Superior on-chain prices</b>
                <p>Users have full control of the trade slippage. Solvers will respect the slippage you set and will not charge you for failed transactions.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/relation.svg">
              <span>
                <b>CoW Trades (P2P)</b>
                <p>By using batch auctions, solvers can directly match different counterparties with each other. </p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/relation.svg">
              <span>
                <b>Private Mempools</b>
                <p> Solvers leverage private mempools to avoid getting the batch settlement transactions caught in the dark forest.</p>
              </span>
            </IconListItem>
          </IconList>
        </div>
      </Section >

      {/* 7th section */}
      < Section flow={'column'} id="community" >
        <div>
          <h3>Join the community</h3>
          <SubTitle align={'center'} maxWidth={62}>Learn more about COW Protocol, chat with the team, others in the community, and have your say in shaping the future of decentralized finance.</SubTitle>
          <SocialList social={social} />
        </div>
      </Section >

    </Layout >
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const siteConfigData = siteConfig
  const { social } = siteConfig
  const metricsData = metrics

  return {
    props: { metricsData, siteConfigData, social }
  }
}
