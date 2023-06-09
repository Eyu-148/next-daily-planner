// @ts-check
import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import BudgetGraph from "../../components/budget-graph";
import BudgetForm from "../../components/forms/form-filterButtons";
import chartStyles from '../../styles/budget.module.css'


export default function Budget() {
    // test dataset
    const lineChartData = {
        //折线图模拟数据
        xData: [
          "2021/08/13",
          "2021/08/14",
          "2021/08/15",
          "2021/08/16",
          "2021/08/17",
          "2021/08/18",
        ],
        seriesData: [22, 19, 88, 66, 5, 90],
    };
    let graphTitle = 'test chart';

    return (
        <Layout isHome={false}>
            <Head>
                <title>Visualization</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex flex-col items-center justify-center space-x-5 my-3'>
                <BudgetGraph
                    title={graphTitle} 
                    xData={lineChartData.xData} 
                    seriesData={lineChartData.seriesData}
                />
                <BudgetForm />
            </div>
        </Layout>
    )
}