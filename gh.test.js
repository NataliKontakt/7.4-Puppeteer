let page;
beforeEach(async () => {
  page = await browser.newPage();
}, 30000);

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  }, 30000);
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Let’s build from here · GitHub');
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 50000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toMatch("Get started with Team")
  }, 70000);
});

test("Sign in to GitHub header content'", async () => {
  await page.goto("https://github.com/features/codespaces");  
  const getStarted = await page.$("body > div.logged-out.env-production.page-responsive.header-overlay > div.application-main > main > div.codespaces-hero.pt-8.overflow-hidden > div.pt-10.pb-4.pb-md-7.d-flex.flex-column.px-3.pt-8.flex-lg-column.flex-items-center.text-center > div > div > a:nth-child(1)");
  await getStarted.click();
  await page.waitForSelector('h1');
  const title2 = await page.title();
  expect(title2).toEqual('Sign in to GitHub · GitHub');
}, 30000);


test("Student Developer Pack header content'", async () => {
  await page.goto("https://education.github.com/");  
  const globalCampus = await page.$("#__layout > div > div > main > div > div > div:nth-child(1) > div > a");
  await globalCampus.click();
  await page.waitForSelector('h1');
  const title2 = await page.title();
  expect(title2).toEqual('GitHub Student Developer Pack - GitHub Education');
}, 30000);

test("The Grafana Alerting team header content'", async () => {
  await page.goto("https://github.blog/category/engineering/");  
  const team = await page.$("#term-post-70744 > div.py-4.d-flex.flex-column.flex-md-row.flex-md-row-reverse.gutter-spacious > div.col-12.col-lg-4.pt-lg-4 > h3 > a");
  await team.click();
  await page.waitForSelector('h1');
  const title2 = await page.title();
  expect(title2).toEqual('How the Grafana Alerting team scales their issue management with GitHub Projects | The GitHub Blog');
}, 30000);