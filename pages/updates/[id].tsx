import { FC } from 'react';
import Layout from '@components/layout';
import utilStyles from '@styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next'
import { getUpdate, getUpdateIDs, Update } from '@lib/updates';
import Table, { headers } from "@components/tools/Table";
import React from 'react';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getUpdate(params?.id as string)
  return {
    props: {
      data
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getUpdateIDs()
  return {
    paths,
    fallback: false
  }
}

const meta = {
  title: "Release",
  description: "A template Next.js website"
};

function RenderImageCell(context: any) {
  return (<img src={context.row.original.image} style={{ display: 'block', maxWidth: '100%', padding: '0 !important' }}></img>)
}

const Release: FC<{ data: Update }> = ({ data }) => {
  const rows = React.useMemo(() => data.rows, [data]);
  const columns = React.useMemo(() => {
    const h = headers([
      ["Availability", "availability"],
      ["HSW Code", "itemCode"],
      ["Supplier Code", "supplierCode"],
      ["Brand", "brand"],
      ["Description", "description"],
      ["MOQ", "minimumOrderQuantity", 60],
      ["Cost Price", "costPrice"],
      ["RRP", "recommendedRetailPrice"],
      ["Margin", "margin"],
      ["Image", "image", undefined, RenderImageCell],
      ["Campaign", "campaign"],
      ["Comments", "comments"],
    ], rows);
    return h;
  }, [data]);

  return (
    <Layout title={`${data.id} Release`} meta={meta} style={{ textAlign: 'center' }}>
      <h2 className={utilStyles.headingLg}>{`${data.id} Release | Test`}</h2>
      <Table data={rows} columns={columns} style={{ fontFamily: "'Courier New', monospace" }}></Table>
    </Layout>
  )
};

export default Release;