import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())


const useKinPrice = () => {
  const { data, error } = useSWR(
    `https://www.coinbase.com/api/v2/assets/prices/238e025c-6b39-57ca-91d2-4ee7912cb518?base=USD`,
    fetcher,
    // refresh every 5 minutes
    { refreshInterval: 5 * 60 * 1000 }
  )


  return {
    data: !data ? null : data.data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useKinPrice;
