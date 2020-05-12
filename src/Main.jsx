import React from 'react'

const formatCurr = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

const formatAmount = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 2
})

const Main = (props) => {
  const { daiSupply, cap, ethSupply, wethSupply, fee, ethUsd, lockedWeth, fix, off } = props
  document.title = `Sai Stats - ${formatAmount.format(daiSupply)}`
  return (
    <div>
      <section className="section">
        <div className="container">
        <div className="columns">
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title">Single Collateral Dai is shutting down today!</h3>
                {props.off &&
                  <p className="subtitle is-size-4">Sai was shutdown at ETH/USD {formatCurr.format(fix)}</p>
                }
                {props.off ||
                  <p className="subtitle is-size-4">Waiting for shutdown...</p>
                }
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={daiSupply}>{formatAmount.format(daiSupply)}</h3>
                <p className="subtitle is-size-4">Sai Supply</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={cap}>{formatAmount.format(cap)}</h3>
                <p className="subtitle is-size-4">Debt Ceiling</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={ethUsd * lockedWeth / daiSupply * 100}>{formatAmount.format(ethUsd * lockedWeth / daiSupply * 100)} %</h3>
                <p className="subtitle is-size-4">Collat. Ratio</p>
              </div>
            </div>
          </div>
          <div className="columns">
          <div className="column">
            <div className="box has-text-centered">
                <h3 className="title" title={lockedWeth}>{formatAmount.format(lockedWeth)}</h3>
                <p className="subtitle is-size-4">ETH Locked</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={ethSupply}>{formatAmount.format(ethSupply)}</h3>
                <p className="subtitle is-size-4">Total ETH Supply</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={lockedWeth / ethSupply * 100}>{formatAmount.format(lockedWeth / ethSupply * 100)} %</h3>
                <p className="subtitle is-size-4">% ETH Locked</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={ethUsd * lockedWeth}>{formatCurr.format(ethUsd * lockedWeth)}</h3>
                <p className="subtitle is-size-4">Value Locked in USD</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={wethSupply}>{formatAmount.format(wethSupply)}</h3>
                <p className="subtitle is-size-4">Total WETH Supply</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={lockedWeth / wethSupply * 100}>{formatAmount.format(lockedWeth / wethSupply * 100)} %</h3>
                <p className="subtitle is-size-4">% WETH Locked</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={ethUsd}>{formatCurr.format(ethUsd)}</h3>
                <p className="subtitle is-size-4">ETH Price</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={fee}>{formatAmount.format(fee)} %</h3>
                <p className="subtitle is-size-4">Stability Fee</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Main
