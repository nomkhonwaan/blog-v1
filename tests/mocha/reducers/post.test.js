import { expect } from 'chai'

import types from '../../../src/constants/ActionTypes'
import reducer, { initialState } from '../../../src/reducers/post'

describe('reducers/post.js', () => {
  it('should handle POSTS_POST_REQUEST by toggle `isFetching` to "true"', () => {
    expect(reducer(undefined, {
      type: types.POSTS_POST_REQUEST
    })).to.deep.equal(Object.assign({}, initialState, {
      isFetching: true
    }))
  })

  it('should handle POSTS_POST_SUCCESS by toggle `isFetching` to "false" and parse response data to valid format', () => {
    const receivedAt = Date.now()

    expect(reducer(undefined, {
      type: types.POSTS_POST_SUCCESS,
      receivedAt,
      links: {},
      data: {
        type: 'posts',
        id: 'post-id'
      },
      included: []
    })).to.deep.equal(Object.assign({}, initialState, {
      isFetching: false,
      lastUpdated: receivedAt,
      links: {},
      data: 'post-id',
      included: []
    }))
  })

  it('should handle POSTS_POST_FAILURE by toggle `isFetching` to "false" and parse errors object', () => {
    const receivedAt = Date.now()

    expect(reducer(undefined, {
      type: types.POSTS_POST_FAILURE,
      receivedAt,
      errors: []
    })).to.deep.equal(Object.assign({}, initialState, {
      isFetching: false,
      lastUpdated: receivedAt,
      errors: []
    }))
  })
})