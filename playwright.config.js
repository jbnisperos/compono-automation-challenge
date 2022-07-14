const config = {
  testDir: './tests',
  retries: 1,
  timeout: 30 * 1000,
  expect: {
    
    timeout: 20000
  },
 
  reporter: 'html',
  
  use: {
    browserName: 'chromium',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  },

  
};

module.exports = config;
