import { ScrapeJob } from "ts-scraper";
import LinkPageScraper from "./LinkPageScraper";

class LinkScrapeJob extends ScrapeJob {

    protected createPageScraper(url) {
        return new LinkPageScraper(url);
    }

}

export default LinkScrapeJob;
