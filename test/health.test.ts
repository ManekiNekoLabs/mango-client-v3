/* eslint-disable @typescript-eslint/no-non-null-assertion, no-console */
import { expect } from 'chai';
import MangoGroup from '../src/MangoGroup';
import MangoAccount from '../src/MangoAccount';
import { loadTestMangoAccount, loadTestMangoCache, loadTestMangoGroup, loadTestMangoRootBank } from './testdata';
import { MangoCache, RootBank } from '../src';

describe('Health', async () => {
  before(async () => {
  });

  describe('empty', async () => {
    it('getHealth() should return correct result', async () => {
      const prefix = "./testdata/empty"
      const mangoGroup: MangoGroup = loadTestMangoGroup(`${prefix}/group.json`)
      const mangoAccount: MangoAccount = loadTestMangoAccount(`${prefix}/account.json`)
      const mangoCache: MangoCache = loadTestMangoCache(`${prefix}/cache.json`)
      const result = mangoAccount.getHealth(mangoGroup, mangoCache, 'Init')

      expect(
        result
          .toString()
      ).to.equal("0");
    });
  });

  describe('cache', async () => {
    it('loading the cache from a file should load the correct values', async () => {
      const prefix = "./testdata/1deposit"
      const mangoCache: MangoCache = loadTestMangoCache(`${prefix}/cache.json`)

      expect(mangoCache.priceCache[0].price.toString()).to.equal("0.33642499999999841975")
      expect(mangoCache.priceCache[1].price.toString()).to.equal("47380.32499999999999928946")
      expect(mangoCache.priceCache[2].price.toString()).to.equal("3309.69549999999999911893")
      expect(mangoCache.priceCache[3].price.toString()).to.equal("0.17261599999999788224")
      expect(mangoCache.priceCache[4].price.toString()).to.equal("8.79379999999999739657")
      expect(mangoCache.priceCache[5].price.toString()).to.equal("1")
      expect(mangoCache.priceCache[6].price.toString()).to.equal("1.00039999999999906777")
      expect(mangoCache.priceCache[7].price.toString()).to.equal("0")
      expect(mangoCache.priceCache[8].price.toString()).to.equal("0")
      expect(mangoCache.priceCache[9].price.toString()).to.equal("0")
      expect(mangoCache.priceCache[10].price.toString()).to.equal("0")
      expect(mangoCache.priceCache[11].price.toString()).to.equal("0")
      expect(mangoCache.priceCache[12].price.toString()).to.equal("0")
      expect(mangoCache.priceCache[13].price.toString()).to.equal("0")
      expect(mangoCache.priceCache[14].price.toString()).to.equal("0")

      expect(mangoCache.rootBankCache[0].depositIndex.toString()).to.equal("1001923.86460821722014813417")
      expect(mangoCache.rootBankCache[0].borrowIndex.toString()).to.equal("1002515.45257855337824182129")
      expect(mangoCache.rootBankCache[1].depositIndex.toString()).to.equal("1000007.37249653914441083202")
      expect(mangoCache.rootBankCache[1].borrowIndex.toString()).to.equal("1000166.98522159213999316307")
      expect(mangoCache.rootBankCache[2].depositIndex.toString()).to.equal("1000000.19554886875829424753")
      expect(mangoCache.rootBankCache[2].borrowIndex.toString()).to.equal("1000001.13273253565107623331")
      expect(mangoCache.rootBankCache[3].depositIndex.toString()).to.equal("1000037.82149923799070379005")
      expect(mangoCache.rootBankCache[3].borrowIndex.toString()).to.equal("1000044.28925241010965052624")
      expect(mangoCache.rootBankCache[4].depositIndex.toString()).to.equal("1000000.0000132182767842437")
      expect(mangoCache.rootBankCache[4].borrowIndex.toString()).to.equal("1000000.14235973938041368569")
      expect(mangoCache.rootBankCache[5].depositIndex.toString()).to.equal("1000000.35244386506945346582")
      expect(mangoCache.rootBankCache[5].borrowIndex.toString()).to.equal("1000000.66156146420993522383")
      expect(mangoCache.rootBankCache[6].depositIndex.toString()).to.equal("1000473.25161608998580575758")
      expect(mangoCache.rootBankCache[6].borrowIndex.toString()).to.equal("1000524.37279217702128875089")
      expect(mangoCache.rootBankCache[7].depositIndex.toString()).to.equal("0")
      expect(mangoCache.rootBankCache[7].borrowIndex.toString()).to.equal("0")
      expect(mangoCache.rootBankCache[8].depositIndex.toString()).to.equal("0")
      expect(mangoCache.rootBankCache[8].borrowIndex.toString()).to.equal("0")
      expect(mangoCache.rootBankCache[9].depositIndex.toString()).to.equal("0")
      expect(mangoCache.rootBankCache[9].borrowIndex.toString()).to.equal("0")
      expect(mangoCache.rootBankCache[10].depositIndex.toString()).to.equal("0")
      expect(mangoCache.rootBankCache[10].borrowIndex.toString()).to.equal("0")
      expect(mangoCache.rootBankCache[11].depositIndex.toString()).to.equal("0")
      expect(mangoCache.rootBankCache[11].borrowIndex.toString()).to.equal("0")
      expect(mangoCache.rootBankCache[12].depositIndex.toString()).to.equal("0")
      expect(mangoCache.rootBankCache[12].borrowIndex.toString()).to.equal("0")
      expect(mangoCache.rootBankCache[13].depositIndex.toString()).to.equal("0")
      expect(mangoCache.rootBankCache[13].borrowIndex.toString()).to.equal("0")
      expect(mangoCache.rootBankCache[14].depositIndex.toString()).to.equal("0")
      expect(mangoCache.rootBankCache[14].borrowIndex.toString()).to.equal("0")
      expect(mangoCache.rootBankCache[15].depositIndex.toString()).to.equal("1000154.42276607534055088422")
      expect(mangoCache.rootBankCache[15].borrowIndex.toString()).to.equal("1000219.00868743509063563124")

      expect(mangoCache.perpMarketCache[0].longFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[0].shortFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[1].longFunding.toString()).to.equal("-751864.70031280454435673732")
      expect(mangoCache.perpMarketCache[1].shortFunding.toString()).to.equal("-752275.3557979761382519257")
      expect(mangoCache.perpMarketCache[2].longFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[2].shortFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[3].longFunding.toString()).to.equal("-636425.51790158202868497028")
      expect(mangoCache.perpMarketCache[3].shortFunding.toString()).to.equal("-636425.51790158202868497028")
      expect(mangoCache.perpMarketCache[4].longFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[4].shortFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[5].longFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[5].shortFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[6].longFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[6].shortFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[7].longFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[7].shortFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[8].longFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[8].shortFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[9].longFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[9].shortFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[10].longFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[10].shortFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[11].longFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[11].shortFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[12].longFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[12].shortFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[13].longFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[13].shortFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[14].longFunding.toString()).to.equal("0")
      expect(mangoCache.perpMarketCache[14].shortFunding.toString()).to.equal("0")
    });
  });

  describe('root bank', async () => {
    it('loading the root bank from a file should load the correct values', async () => {
      const prefix = "./testdata/1deposit"
      const rootBank: RootBank = loadTestMangoRootBank(`${prefix}/root_bank0.json`)

      expect(rootBank.publicKey.toBase58()).to.equal("HUBX4iwWEUK5VrXXXcB7uhuKrfT4fpu2T9iZbg712JrN")
      expect(rootBank.optimalUtil.toString()).to.equal("0.69999999999999928946")
      expect(rootBank.optimalRate.toString()).to.equal("0.05999999999999872102")
      expect(rootBank.maxRate.toString()).to.equal("1.5")
      expect(rootBank.numNodeBanks.toString()).to.equal("1")
      expect(rootBank.depositIndex.toString()).to.equal("1000154.42276607355830719825")
      expect(rootBank.borrowIndex.toString()).to.equal("1000219.00867863010088498754")
      expect(rootBank.lastUpdated.toString(10)).to.equal("1633359485")
    });
  });

  describe('1deposit', async () => {
    it('getHealth() should return correct result', async () => {
      const prefix = "./testdata/1deposit"
      const mangoGroup: MangoGroup = loadTestMangoGroup(`${prefix}/group.json`)
      const mangoAccount: MangoAccount = loadTestMangoAccount(`${prefix}/account.json`)
      const mangoCache: MangoCache = loadTestMangoCache(`${prefix}/cache.json`)
      console.log("mangoCache", mangoCache)
      const result = mangoAccount.getHealth(mangoGroup, mangoCache, 'Init')

      expect(
        result
          .toString()
      ).to.equal("37904260000.05905822642118252475");
    });
  });

  describe('perpAccountNoSpotOpenordersX', async () => {
    it('getHealth() should return correct result', async () => {
      const prefix = "./testdata/perp_account_no_spot_openorders"
      const mangoGroup: MangoGroup = loadTestMangoGroup(`${prefix}/group.json`)
      const mangoAccount: MangoAccount = loadTestMangoAccount(`${prefix}/account.json`)
      const mangoCache: MangoCache = loadTestMangoCache(`${prefix}/cache.json`)
      const result = mangoAccount.getHealth(mangoGroup, mangoCache, 'Init')

      expect(
        result
          .toString()
      ).to.equal("341025333625.51856223547208912805");
    });
  });

  describe('perpAccountNoSpotOpenordersUnhealthy', async () => {
    it('getHealth() should return correct result', async () => {
      const prefix = "./testdata/perp_account_no_spot_openorders_unhealthy"
      const mangoGroup: MangoGroup = loadTestMangoGroup(`${prefix}/group.json`)
      const mangoAccount: MangoAccount = loadTestMangoAccount(`${prefix}/account.json`)
      const mangoCache: MangoCache = loadTestMangoCache(`${prefix}/cache.json`)
      const result = mangoAccount.getHealth(mangoGroup, mangoCache, 'Init')

      expect(
        result
          .toString()
      ).to.equal("-848086876487.04950427436299875694");
    });
  });

  describe('account1', async () => {
    it('getHealth() should return correct result', async () => {
      const prefix = "./testdata/account1"
      const mangoGroup: MangoGroup = loadTestMangoGroup(`${prefix}/group.json`)
      const mangoAccount: MangoAccount = loadTestMangoAccount(`${prefix}/account.json`)
      const mangoCache: MangoCache = loadTestMangoCache(`${prefix}/cache.json`)
      const result = mangoAccount.getHealth(mangoGroup, mangoCache, 'Init')

      expect(
        result
          .toString()
      ).to.equal("454884281.15520619643754685058");
    });
  });

  describe('account2', async () => {
    it('getHealth() should return correct result', async () => {
      const prefix = "./testdata/account2"
      const mangoGroup: MangoGroup = loadTestMangoGroup(`${prefix}/group.json`)
      const mangoAccount: MangoAccount = loadTestMangoAccount(`${prefix}/account.json`)
      const mangoCache: MangoCache = loadTestMangoCache(`${prefix}/cache.json`)
      const result = mangoAccount.getHealth(mangoGroup, mangoCache, 'Init')

      expect(
        result
          .toString()
      ).to.equal("7516159604.84918334545095675026");
    });
  });
});
