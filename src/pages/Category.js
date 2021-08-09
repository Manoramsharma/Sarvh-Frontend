import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../redux/actions/category";

/**
 * @author
 * @function Category
 **/

const Category = (props) => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li>{category.name} </li>
        // label: category.name,
        // value: category._id,
        // children: category.children.length > 0 && renderCategories(category.children)
      );
    }
    return myCategories;
  };

  console.log(renderCategories(category.categories));
  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <h3>category</h3>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ul>{renderCategories(category.categories)}</ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Category;
