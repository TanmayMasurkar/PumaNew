// import { ArrowBack } from "@mui/icons-material";
// import { Grid, Typography } from "@mui/material";
// import React from "react";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
// import "react-horizontal-scrolling-menu/dist/styles.css";

// const getItems = () =>
//   Array(5)
//     .fill(0)
//     .map((_, ind) => ({ id: `element-${ind}` }));

// function Test() {
//   const [items, setItems] = React.useState(getItems);
//   const [selected, setSelected] = React.useState([]);
//   const [position, setPosition] = React.useState(0);

//   const isItemSelected = (id) => !!selected.find((el) => el === id);

//   const handleClick =
//     (id) =>
//     ({ getItemById, scrollToItem }) => {
//       const itemSelected = isItemSelected(id);

//       setSelected((currentSelected) =>
//         itemSelected
//           ? currentSelected.filter((el) => el !== id)
//           : currentSelected.concat(id)
//       );
//     };

//   return (
//     <ScrollMenu
//       LeftArrow={null}
//       RightArrow={null}
//       translate={-position}
//       onWheel={(event) => {
//         setPosition((prevPosition) => prevPosition + event.deltaY);
//       }}
//     >
//       {items.map(({ id }) => (
//         <Card
//           itemId={id}
//           title={id}
//           key={id}
//           onClick={handleClick(id)}
//           selected={isItemSelected(id)}
//         />
//       ))}
//     </ScrollMenu>
//   );
// }

// function Card({ onClick, selected, title, itemId }) {
//   const visibility = React.useContext(VisibilityContext);
//   const [isHovered, setIsHovered] = React.useState(false);

//   const windowWidth = window.innerWidth;
//   const divWidth = windowWidth * 0.5; // Set the width to 50% of the window width

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div
//       onClick={() => onClick(visibility)}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         width: `${divWidth}px`, 
//         // border: "1px solid black",
//         height: "100vh",
//         overflow: "hidden",
//         position: "relative",
//       }}
//       tabIndex={0}
//     >
//       <img
//         src="https://www.locus-x.com/wp-content/uploads/2106shinhanlife02.webp"
//         alt="Img 1"
//         style={{
//           objectFit: "cover",
//           height: "100%",
//           width: "100%",
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           color: "white",
//           fontSize: "2rem",
//           fontWeight: "bold",
//           textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//           zIndex: 4,
//         }}
//       >
//         <Typography variant="subtitle2">TVC with ROZY</Typography>
//         <Typography variant="h4">{title}</Typography>
//       </div>
//       {isHovered && (
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "rgba(0, 0, 0, 0.5)",
//             zIndex: 2,
//           }}
//         />
//       )}
//     </div>
//   );
// }

// export default Test;


import { Grid, Typography, useMediaQuery, ThemeProvider, createTheme } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { allCategory } from "../redux/category/Action";
import { Link } from "react-router-dom";

const getItems = () =>
  Array(5)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function Test() {
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  const dispatch = useDispatch();
  const CATEGORY = useSelector((state) => state.cateStore.category.data);
  const [categoryData, setCategoryData] = useState([]);

  useMemo(() => {
    dispatch(allCategory());
  }, [dispatch]);

  useMemo(() => {
    if (CATEGORY === undefined) {
      setCategoryData([]);
    } else {
      setCategoryData([...CATEGORY]);
    }
  }, [CATEGORY]);

  return (
    <ThemeProvider theme={createTheme()}>
      <ScrollMenu
        LeftArrow={null}
        RightArrow={null}
        translate={-position}
        onWheel={(event) => {
          setPosition((prevPosition) => prevPosition + event.deltaY);
        }}
      >
        {categoryData.map((category) => (
          <Card
            itemId={category._id}
            title={category.categoryName}
            image={category.categoryImage}
            key={category._id}
            onClick={handleClick(category._id)}
            selected={isItemSelected(category._id)}
          />
        ))}
      </ScrollMenu>
    </ThemeProvider>
  );
}

function Card({ onClick, selected, title, image, itemId }) {
  const visibility = React.useContext(VisibilityContext);
  const [isHovered, setIsHovered] = React.useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const windowWidth = window.innerWidth;
  const divWidth = isMobile ? windowWidth : windowWidth * 0.5; // Set the width to 50% of the window width on desktop

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  

  return (
   
    <div
      onClick={() => onClick(visibility)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: `${divWidth}px`,
        height: isMobile ? "50vh" : "100vh",
        overflow: "hidden",
        position: "relative",
      }}
      tabIndex={0}
    >
       <Link to={`/category/${itemId}`}>
      <img
        src={`http://localhost:5000/uploads/${image}`}
        alt="Category Image"
        style={{
          objectFit: "cover",
          height: "100%",
          width: "100%",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          zIndex: 4,
        }}
      >
        <Typography variant="h3" style={{ textTransform: "uppercase" , fontWeight:"bold"}}>
          {title}
        </Typography>
      </div>
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 2,
          }}
        />
      )}
      </Link>
    </div>
  );
}

export default Test;
