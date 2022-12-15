import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Radio,
  RadioGroup,
  Stack,
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
  const [sort , setSort ] = useState(searchParams.getAll("sort")[0] || "")

  const handleChange = (e) => {
    let newCategory = [...brand];

    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setBrand(newCategory);
  };

  const handleSort = (e)=>{
          setSort(e.target.value)
        }

  useEffect(() => {
    let params = {};
    params.brand = brand;
    sort &&  (params.sort = sort )
    setSearchParams(params);
  }, [brand,sort ,  setSearchParams]);


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
    },
    {
      id: "2",
      color: "Rose Gold",
      size: "1",
    },
    {
      id: "3",
      color: "Blue",
      size: "2",
    },
    {
      id: "4",
      color: "White",
      size: "2",
    },
    {
      id: "5",
      color: "Green",
      size: "3",
    },
    {
      id: "6",
      color: "Tan",
      size: "2",
    },
    {
      id: "7",
      color: "Black",
      size: "3",
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

        <Modalfilter />

        {/* Checkboxes are here ---------depend upon Color- ------- */}
        <hr style={{ marginTop: "3vh" }} />

        <Text fontSize="17px" fontWeight="500" mb={4} mt={3} color="#1d252c">
          Color
        </Text>
        <Box style={{ display: "flex", flexDirection: "column" }} mb={1}>
          {filterColorData.length > 0 &&
            filterColorData.map((item) => {
              return (
                <Checkbox key={item.id}>
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
                <Checkbox key={item.id}>
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
