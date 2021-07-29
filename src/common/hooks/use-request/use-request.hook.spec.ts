import { act, renderHook } from '@testing-library/react-hooks'
import { TestWrapper } from 'common/test-wrapper'
import useRequest from './use-request.hook'

describe('Use request hook', () => {
  it('returns data and status success when a successful request has been made', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useRequest(() =>
          Promise.resolve({
            status: 200,
            data: {
              someKey: 'some-data',
            },
          })
        ),
      {
        wrapper: TestWrapper,
      }
    )

    act(() => result.current.call())
    await waitForNextUpdate()

    expect(result.current.data).toEqual({
      someKey: 'some-data',
    })
    expect(result.current.status).toEqual('success')
  })

  it('returns status error when a unsuccessful request has been made', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useRequest(() =>
          Promise.resolve({
            status: 404,
            error: 'Unknown symbol',
          })
        ),
      {
        wrapper: TestWrapper,
      }
    )

    act(() => result.current.call())
    await waitForNextUpdate()

    expect(result.current.data).toBeFalsy()
    expect(result.current.status).toEqual('error')
  })

  it('returns status error when a request throws an error', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useRequest(() => Promise.reject(new Error('an error occurred'))),
      {
        wrapper: TestWrapper,
      }
    )

    act(() => result.current.call())
    await waitForNextUpdate()

    expect(result.current.data).toBeFalsy()
    expect(result.current.status).toEqual('error')
  })
})
