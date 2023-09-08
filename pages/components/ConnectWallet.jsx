import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react'

export default function ConnectWallet() {
  return (
    <div>
        <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              const ready = mounted && authenticationStatus !== 'loading';
              const connected =
                ready &&
                account
                &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === 'authenticated');
              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    'style': {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <div
                          className="!visible mt-2 hidden bg-[#F52BA4] py-2 px-4 rounded-md flex-gro basis-[100%] items-center md:mt-0 md:!flex md:basis-auto hover:cursor-pointer"
                          id="navbarSupportedContent3"
                          onClick={openConnectModal}
                          data-te-collapse-item>

                          <div
                            className="list-style-none mr-auto flex flex-col pl-0 md:mt-1 md:flex-row"
                            data-te-navbar-nav-ref>

                            <div
                              className="mb-4 pl-2 md:mb-0 md:pl-0 md:pr-1"
                              data-te-nav-item-ref>
                              <span
                                className="p- mono_font text-white text-xl transition duration-200 hover:ease-in-out motion-reduce:transition-none md:px-2"
                                data-te-nav-link-ref> Connect Wallet</span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    if (chain.unsupported) {
                      return (
                        <button onClick={openChainModal} type="button">
                          Wrong network
                        </button>
                      );
                    }
                    return (
                      <div style={{ display: 'flex', gap: 12 }} className="border rounded-2xl p-4">
                        <button
                          onClick={openChainModal}
                          style={{ display: 'flex', alignItems: 'center' }}
                          type="button"
                        >
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 12,
                                height: 12,
                                borderRadius: 999,
                                overflow: 'hidden',
                                marginRight: 4,
                              }}
                            >
                              {chain.iconUrl && (
                                <img
                                  alt={chain.name ?? 'Chain icon'}
                                  src={chain.iconUrl}
                                  style={{ width: 12, height: 12 }}
                                />
                              )}
                            </div>
                          )}
                          {chain.name}
                        </button>
                        <button onClick={openAccountModal} type="button" className="">
                          {account.displayName}
                          {/* {account.displayBalance
                            ? ` (${account.displayBalance})`
                            : ''} */}
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
    </div>
  )
}
