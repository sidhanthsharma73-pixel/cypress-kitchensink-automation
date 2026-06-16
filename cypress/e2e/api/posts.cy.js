describe('API Testing', () => {

  it('should get a post successfully', () => {

    cy.request('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {

        expect(response.status).to.eq(200)

        expect(response.body.id).to.eq(1)

      })

  })
  it('should create a new post successfully', () => {

    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {

      title: 'foo',

      body: 'bar',

      userId: 1

    }).then((response) => {

      expect(response.status).to.eq(201)

      expect(response.body.title).to.eq('foo')

      expect(response.body.body).to.eq('bar')

      expect(response.body.userId).to.eq(1)
    

    })})})