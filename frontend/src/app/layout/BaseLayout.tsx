// // react
// import React, {useState} from 'react';
// // import HeaderComponent from '../common/HeaderComponent';
// // import SideBar from 'src/common/SideBar';
// // import ContentSpace from 'src/common/ContentSpace';
// // import FooterBar from 'src/common/FooterBar';

// interface Props {
//   children: React.ReactNode;
// }

// const BaseLayout = ({children}: Props) => {
//   const [collapsed, setCollapsed] = useState<boolean>(false);
//   const [margin, setMargin] = useState(230);

//   const toggleSider = (): void => {
//     setCollapsed(!collapsed);
//     setMargin(margin === 230 ? 70 : 230);
//   };

//   // <ConfigProvider
//   //     theme={{
//   //         components: {
//   //             Layout: {
//   //                 bodyBg: '#efefef' /** body부분 background */
//   //             },
//   //         },
//   //     }}
//   // />

//   return (
//     <Layout
//       hasSider
//       style={{
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'row',
//         background: '#fbfcfe',
//       }}>
//       <SideBar
//         collapsed={collapsed}
//         margin={margin}
//         toggleSider={toggleSider}
//       />
//       <Layout style={{marginLeft: margin, background: '#fbfcfe'}}>
//         {/* <HeaderComponent />
//         <ContentSpace>{children}</ContentSpace>
//         <FooterBar /> */}
//       </Layout>
//     </Layout>
//   );
// };
// export default BaseLayout;
