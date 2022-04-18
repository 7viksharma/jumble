import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import {
  CircularProgressLabel,
  Stack,
  HStack,
  VStack,
  Flex,
  CircularProgress,
  Box,
  Image,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

export function Upload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <div className="Upload">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {/* <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              <Box w="300px" h="300px">
                <Image
                  borderRadius="full"
                  boxSize="300px"
                  src={image.dataURL}
                />
              </Box>
            </button> */}
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <button
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <Box w="300px" h="300px">
                    <Image
                      borderRadius="full"
                      boxSize="300px"
                      src={image.dataURL}
                    />
                  </Box>
                </button>
                {/* <Box w="300px" h="300px"> */}
                {/* <img src={image.dataURL} alt="" width="300px height" /> */}
                {/* <Image
                    borderRadius="full"
                    boxSize="300px"
                    src={image.dataURL}
                    alt=""
                  />
                </Box> */}
                <div className="image-item__btn-wrapper">
                  <ButtonGroup variant="outline" spacing="105px">
                    <Button
                      colorScheme="blue"
                      onClick={() => onImageUpdate(index)}
                    >
                      Change
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => onImageRemove(index)}
                    >
                      Remove
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
