import Service from './service'

describe('Service class', () => {
  it('makes a get request using fetch', async () => {
    process.env = {
      ...process.env,
      ...{ API_URL: 'https://some-api-url.com', API_TOKEN: 'some-api-token' },
    }
    global.fetch = jest.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          symbol: 'SOME-SYMBOL',
          name: 'some company name',
        }),
        { status: 200 }
      )
    )

    const response = await Service.get('/some/endpoint/v1/company', {
      search: 'some-company-name',
      page: '5',
    })

    expect(global.fetch).toHaveBeenCalledWith(
      'https://some-api-url.com/some/endpoint/v1/company?token=some-api-token&search=some-company-name&page=5',
      { method: 'GET' }
    )
    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({
      symbol: 'SOME-SYMBOL',
      name: 'some company name',
    })
  })
})
