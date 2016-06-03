import { expect } from 'chai'
import pagination from '../../../src/api/utils/pagination'

describe('api/utils/pagination.js', () => {

  it('should create only self link', () => {
    const page = 1
    const itemsPerPage = 5
    const totalItems = 1

    const { self, next, previous } = pagination(page, itemsPerPage, totalItems,
      `/api/v1/posts`)

    expect(self).to.match(/(?=.*page\[number\]\=1)(?=.*page\[size\]\=5).*$/)
    expect(next).to.be.undefined
    expect(previous).to.be.undefined
  })
  
  it('should create only self and next links', () => {
    const page = 1
    const itemsPerPage = 5
    const totalItems = 11
    
    const { self, next, previous } = pagination(page, itemsPerPage, totalItems, 
      `/api/v1/posts?page[size]=${itemsPerPage}`)
    
    expect(self).to.match(/(?=.*page\[number\]\=1)(?=.*page\[size\]\=5).*$/)
    expect(next).to.match(/(?=.*page\[number\]\=2)(?=.*page\[size\]\=5).*$/)
    expect(previous).to.be.undefined
  })
})
