/**
 * Refer to the following data when completing your answers: (The following JSON
 * file contains providers available for an industry)
 */

const PROVIDERS = require('../shared/data.json');
const core = require('mingo/core');
const Aggregate = require('mingo/aggregator').Aggregator;
const useOperators = core.useOperators;
const OperatorType = core.OperatorType;
const pipelines = require('mingo/operators/pipeline');
const projections = require('mingo/operators/projection');
const queryOps = require('mingo/operators/query');
const accumulators = require('mingo/operators/accumulator');
const expressions = require('mingo/operators/expression');

useOperators(OperatorType.PIPELINE, pipelines);

useOperators(OperatorType.ACCUMULATOR, accumulators);

useOperators(OperatorType.EXPRESSION, expressions);

useOperators(OperatorType.PROJECTION, projections);

useOperators(OperatorType.QUERY, queryOps);

/**
 * Create a query that returns total premiums and fees available for retail industry
 */
function task1() {
  const query1 = new Aggregate([
    { $unwind: '$prices' },
    { $match: { industry: 'retail' } },
    {
      $group: {
        totalPremium: { $sum: '$prices.premium' },
        totalFees: { $sum: '$prices.fee' },
      },
    },
  ]);
  return query1.run(PROVIDERS);
}

/**
 * Create a query that returns the minimum premium available among the providers for technology industry
 */
function task2() {
  const query1 = new Aggregate([
    { $unwind: '$prices' },
    { $match: { industry: 'technology' } },
    {
      $group: {
        totalPremium: { $min: '$prices.premium' },
      },
    },
    {
      $project: { totalPremium: 1 },
    },
  ]);

  return query1.run(PROVIDERS);
}

/**
 * Create a query that returns all the provider names available for the technology industry
 * that has a premium amount greater than or equal to 1000
 */
function task3() {
  let providersArray = [];
  const query1 = new Aggregate([
    { $unwind: '$prices' },
    {
      $match: {
        $and: [
          { 'prices.premium': { $gte: 1000 } },
          { industry: 'technology' },
        ],
      },
    },
    { $project: { name: 1 } },
  ]);

  let providerNames = query1.run(PROVIDERS);

  providerNames?.map((ele) => {
    providersArray.push(ele.name);
  });

  return providersArray;
}

/**
 * To see the expected results, please refer to ./expected-data.json file in part-1 directory!
 * NOTE: Please ensure that all the tests in part-1.spec.js are passing!
 */

module.exports = {
  task1,
  task2,
  task3,
};
