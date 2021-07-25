import Service from './service'

describe('Service class', () => {
  beforeEach(() => {
    process.env = {
      ...process.env,
      ...{ API_URL: 'https://some-api-url.com', API_TOKEN: 'some-api-token' },
    }
  })

  it('makes a get request using fetch', async () => {
    global.fetch = jest.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          symbol: 'SOME-SYMBOL',
          name: 'some company name',
        }),
        { status: 200 }
      )
    )

    const response = await new Service().get('/some/endpoint/v1/company', {
      search: 'some-company-name',
      page: '5',
    })

    expect(global.fetch).toHaveBeenCalledWith(
      'https://some-api-url.com/some/endpoint/v1/company?token=some-api-token&search=some-company-name&page=5',
      { method: 'GET' }
    )
    expect(response.status).toBe(200)
    expect(response.error).toBe(false)
    expect(response.data).toEqual({
      symbol: 'SOME-SYMBOL',
      name: 'some company name',
    })
  })

  it('returns error and status code when a request does not returns ok', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValue(new Response('Unknown symbol', { status: 404 }))

    const response = await new Service().get('/some/endpoint/v1/company')

    expect(response.status).toBe(404)
    expect(response.error).toBe(true)
    expect(response.data).toBeFalsy()
  })
})
