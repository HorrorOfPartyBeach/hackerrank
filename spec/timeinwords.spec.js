let { expect } = require('chai');
let { timeInWords } = require('../timeinwords');

describe('timeInWords()', () => {
  'use strict';
  it('should return a string in place of numbers', () => {
    expect(timeInWords(3, 10)).to.eql('ten minutes past three');
  });
  it('should return a numerical time as a string of words', () => {
    expect(timeInWords(4, 20)).to.eql('twenty minutes past four');
  });
  it('should return a numerical time as a string of words for special case numbers', () => {
    expect(timeInWords(1, 0)).to.eql("one o' clock");
    expect(timeInWords(7, 15)).to.eql('quarter past seven');
    expect(timeInWords(3, 30)).to.eql('half past three');
  });
  it('should return a numerical time as a string of words for times between "half past" and coming up to the hour', () => {
    expect(timeInWords(5, 47)).to.eql('thirteen minutes to six');
    expect(timeInWords(6, 45)).to.eql('quarter to seven');
  });
});
