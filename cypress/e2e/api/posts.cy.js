describe('API Testing', () => {

  it('should get a post successfully', () => {

        cy.request(
            'GET',
            'https://jsonplaceholder.typicode.com/posts/1'
        )
        .then((response) => {

            expect(response.status).to.eq(200)

            expect(response.body.id).to.eq(1)

            expect(response.body.userId).to.eq(1)

        })



  it('should update a post', () => {

    cy.request(
        'PUT',
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            id: 1,
            title: 'updated title',
            body: 'updated body',
            userId: 1
        }
    ).then((response) => {

        expect(response.status).to.eq(200)

        expect(response.body.title)
            .to.eq('updated title')

    })

})

  it('should delete a post', () => {

    cy.request(
        'DELETE',
        'https://jsonplaceholder.typicode.com/posts/1'
    ).then((response) => {

        expect(response.status).to.eq(200)

    })

})

})

})