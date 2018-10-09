const Tags = require('../src/tags');

jest.mock('child_process',()=>({
  execSync: jest.fn().mockReturnValue('8b3940bc0cce7e6c1a64af08edd8a75fedbdc3d1 refs/tags/v0.2.0\n 7e6c40bc0cce7e6c1a64af08edd8a75fedbdc3d1 v0.1.0')
}));
describe('tags', () => {
  it('getTags should works well', () => {
    const tags = Tags.getTags('testurl');
    expect(tags.length).toBe(1);
    expect(tags[0]).toEqual({
      hash: '8b3940bc0cce7e6c1a64af08edd8a75fedbdc3d1',
      name: 'v0.2.0'
    });
  });
});

