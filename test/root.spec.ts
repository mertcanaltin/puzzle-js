import "reflect-metadata";

//Unit Tests
import fragmentTests from "./fragment.spec";
import gatewayTests from "./gateway.spec";
import pageTests from "./page.spec";
import resourceTest from "./resource.spec";
import storefrontTests from "./storefront.spec";
import templateTests from "./template.spec";
import serverTests from "./server.spec";
import apiTest from "./api.spec";
import loggerTest from "./logger.spec";
import configuratorTests from "./configurator.spec";
import decoratorTests from "./decorator.spec";


//Integration Tests
import bffIntegrationTests from "./integration/bff.spec";
import storefrontIntegrationTests from "./integration/sf.spec";


describe('Unit Tests', () => {
    fragmentTests();
    gatewayTests();
    pageTests();
    resourceTest();
    storefrontTests();
    templateTests();
    serverTests();
    apiTest();
    loggerTest();
    configuratorTests();
    decoratorTests();
});

describe('Integration', () => {
    bffIntegrationTests();
    storefrontIntegrationTests();
});
