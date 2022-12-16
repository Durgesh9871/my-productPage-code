import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Modalfilter } from "./Modalfilter";
import "./ProductHeadings.css";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [brand, setBrand] = useState(searchParams.getAll("brand") || []);
  const [color, setColor] = useState(searchParams.getAll("color") || []);
  const [rating, setRating] = useState(searchParams.getAll("rating") || []);
  const [allFilter , setAllFilter ] = useState([])


  const [sort , setSort ] = useState(searchParams.getAll("sort")[0] || "")


  const handleChange = (e) => {
    let newCategory = [...brand];
    // let filter = [...allFilter]
       
    // if(filter.includes(e.target.value)){
      // filter.splice(filter.indexOf(e.target.value), 1);
    //  }

    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
      // filter.push(e.target.value);
    }
    setBrand(newCategory);
    // setAllFilter(filter)
  };

  const handleChangeColor = (e) => {
    let newCategory = [...color];
    // let filter = [...allFilter]

    // if(filter.includes(e.target.value)){
    //   filter.splice(filter.indexOf(e.target.value), 1);
    //  }

    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
      // filter.push(e.target.value);
    }
    setColor(newCategory);
    // setAllFilter(filter)
  };

  const handleChangeReview = (e) => {
    let newCategory = [...rating];
    //  let filter = [...allFilter]
    //  if(filter.includes(e.target.value)){
    //    filter.splice(filter.indexOf(e.target.value), 1);
    //   }
      if (newCategory.includes(e.target.value)) {
        newCategory.splice(newCategory.indexOf(e.target.value), 1);
      }
    
    else {
      newCategory.push(e.target.value);
      // filter.push(e.target.value);
    }
    setRating(newCategory);
    // setAllFilter(filter)
   
  };
// console.log('allFilter' , allFilter)
// console.log('allFilter' , allFilter)


  const handleSort = (e)=>{
          setSort(e.target.value)
        }

  useEffect(() => {
    let obj = [...brand ,...color , ...rating]
    let params = {};
    params.brand = brand;
    params.color = color ;
    params.rating = rating 
    sort &&  (params.sort = sort )
    setSearchParams(params);
    // obj.push([...brand])

    setAllFilter(obj)
  }, [brand,color ,sort ,rating,  setSearchParams]);


  //    alll the filter data using loop -----------------------------------------
  const filterNameData = [
    {
      id: "1",
      name: "Microsoft",
      value: "Microsoft",
      size: "5",
    },
    {
      id: "2",
      name: "HP",
      value: "HP",
      size: "5",
    },
    {
      id: "3",
      name: "ASUS",
      value: "ASUS",
      size: "5",
    },
    {
      id: "4",
      name: "Dell",
      value: "Dell",
      size: "5",
    },
  ];

  const filterColorData = [
    {
      id: "1",
      color: "Silver",
      size: "7",
      value:"Silver" ,
    },
    {
      id: "2",
      color: "Rose Gold",
      size: "1",
      value:"Rose Gold" ,

    },
    {
      id: "3",
      color: "Blue",
      size: "2",
      value:"Blue" ,

    },
    {
      id: "4",
      color: "White",
      size: "2",
      value:"White" ,

    },
    {
      id: "5",
      color: "Green",
      size: "3",
      value:"Green" ,

    },
    {
      id: "6",
      color: "Tan",
      size: "2",
      value:"Tan" ,

    },
    {
      id: "7",
      color: "Black",
      size: "3",
      value:"Black" ,

    },
  ];

  const filterReviewData = [
    {
      id: 1,
      review: 5,
      size: 5,
    },
    {
      id: 2,
      review: 4,
      size: 6,
    },
    {
      id: 3,
      review: 3,
      size: 7,
    },
    {
      id: 4,
      review: 2,
      size: 2,
    },
    {
      id: 5,
      review: 1,
      size: "No Item",
    },
  ];

  return (
    <Box>
      <Box
        className="hoverFilterMainBox"
        style={{
          display: "",
          border: "1px   black",
          width: "90%",
          margin: "auto",
          height: "auto",
          textAlign: "left",
          
        }}
      >
          
         
        
            
          { allFilter.length > 0 && allFilter.map((item,i)=>{
            return(<Text>{item}</Text>)
           
          })} 
               {/* {item.length > 0 && item.map((el)=>{
              console.log(el)
              return (<Button>{el}</Button>)
             }) } */}
      
    

        {/* Checkboxes are here ---------depend upon sorting ------- */}
        <Text fontSize="17px" fontWeight="500" mb={4} mt={3} color="#1d252c">
          Sort by Price
        </Text>
        <Box>
        <input type="radio" value="asc"  name="sortBy" defaultChecked={sort === 'asc'}   onChange={handleSort}   />
        <label> <Text display="inline-block">Low to High</Text> </label>
          
          <br />
        <input type="radio" value="desc"  name="sortBy" defaultChecked={sort === 'desc'}   onChange={handleSort}  />
          <label> <Text display="inline-block">High to low</Text> </label>
        </Box>

        {/* Checkboxes are here ---------depend upon Models ------- */}
        <Text fontSize="17px" fontWeight="500" mb={4} mt={3} color="#1d252c">
          Brand
        </Text>
        <Box style={{ display: "flex", flexDirection: "column" }} mb={1}>
          {filterNameData.length > 0 &&
            filterNameData.map((item) => {
              return (
                <Checkbox
                  key={item.id}
                  value={item.value}
                  onChange={handleChange}
                  defaultChecked={brand.includes(item.value)}
                >
                  <Text fontSize="17px" fontWeight="400" color="#1d252c">
                    {item.name} <span>({item.size})</span>
                  </Text>
                </Checkbox>
              );
            })}
        </Box>

        <Modalfilter brand={brand} handleChange={handleChange}/>

        {/* Checkboxes are here ---------depend upon Color- ------- */}
        <hr style={{ marginTop: "3vh" }} />

        <Text fontSize="17px" fontWeight="500" mb={4} mt={3} color="#1d252c">
          Color
        </Text>
        <Box style={{ display: "flex", flexDirection: "column" }} mb={1}>
          {filterColorData.length > 0 &&
            filterColorData.map((item) => {
              return (
                <Checkbox key={item.id} value={item.value} onChange={handleChangeColor}  defaultChecked={color.includes(item.value)} >
                  <Text fontSize="17px" fontWeight="400" color="#1d252c">
                    {item.color} <span>({item.size})</span>
                  </Text>
                </Checkbox>
              );
            })}
        </Box>

        {/* Checkboxes are here ---------depend upon Rating- ------- */}
        <hr style={{ marginTop: "3vh" }} />

        <Text fontSize="17px" fontWeight="500" mb={4} mt={3} color="#1d252c">
          Rating
        </Text>
        <Box style={{ display: "flex", flexDirection: "column" }} mb={1}>
          {filterReviewData.length > 0 &&
            filterReviewData.map((item) => {
              return (
                <Checkbox key={item.id}  value={item.review}
                onChange={handleChangeReview}
                defaultChecked={rating.includes(item.value)}>
                  <Text fontSize="17px" fontWeight="400" color="#1d252c">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < item.review ? "teal.500" : "gray.300"}
                        />
                      ))}

                    <span>({item.size})</span>
                  </Text>
                </Checkbox>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export { Filter };
