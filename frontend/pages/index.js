import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import XpTracker from '../components/XpTracker'

export default function Home() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({ connector: new InjectedConnector() })
  const { disconnect } = useDisconnect()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Gamify Life MVP</h1>
      {isConnected ? (
        <>
          <p className="mb-2">Connected wallet: {address}</p>
          <button onClick={() => disconnect()} className="px-4 py-2 bg-red-500 text-white rounded mb-4">Disconnect</button>
          <XpTracker />
        </>
      ) : (
        <button onClick={() => connect()} className="px-4 py-2 bg-blue-500 text-white rounded">Connect Wallet</button>
      )}
    </div>
  )
}
