"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";
import { useCart } from "../app/context/CartContext";
import { BsCart3 } from "react-icons/bs";
import CheckoutForm from "./form";

export default function CartSidebar() {
  const [open, setOpen] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const { cart, removeFromCart, updateQuantity } = useCart(); // Ensure removeFromCart & updateQuantity exist in your context

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Calculate total items in cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} sx={{ position: "relative" }}>
        <Badge
          badgeContent={totalItems}
          color="error"
          overlap="circular"
          sx={{
            "& .MuiBadge-badge": {
              right: -2,
              top: -2,
              minWidth: 16,
              height: 16,
              fontSize: "0.75rem",
            },
          }}
        >
          <BsCart3 className="text-black" size={24} />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 350,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: 2 }}
          >
            Shopping Cart
          </Typography>
          <Divider />
          {cart.length === 0 ? (
            <Typography
              sx={{
                marginTop: 4,
                textAlign: "center",
                color: "gray",
              }}
            >
              Your cart is empty
            </Typography>
          ) : (
            <>
              <List sx={{ flexGrow: 1 }}>
                {cart.map((item) => (
                  <ListItem
                    key={item.id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 2,
                    }}
                  >
                    {/* Product Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={50}
                      height={50}
                      style={{
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                    />
                    {/* Product Details */}
                    <Box sx={{ flex: 1, marginLeft: 2 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        ${item.price} x {item.quantity}
                      </Typography>
                    </Box>
                    {/* Quantity Controls */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(item.quantity - 1, 1)
                          )
                        }
                        sx={{
                          minWidth: "30px",
                          padding: 0,
                        }}
                      >
                        -
                      </Button>
                      <Typography sx={{ marginX: 1 }}>
                        {item.quantity}
                      </Typography>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        sx={{
                          minWidth: "30px",
                          padding: 0,
                        }}
                      >
                        +
                      </Button>
                    </Box>
                    {/* Delete Button */}
                    <IconButton
                      edge="end"
                      color="error"
                      onClick={() => removeFromCart(item.id)}
                      sx={{ marginLeft: 2 }}
                    >
                      <FaTrash />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              {/* Total Price */}
              <Box sx={{ marginTop: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "right",
                  }}
                >
                  Total: ${totalPrice.toFixed(2)}
                </Typography>
              </Box>
              {/* Checkout Button */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  marginTop: 2,
                }}
                onClick={() => alert("Proceeding to checkout")}
              >
                Checkout
              </Button>
              <CheckoutForm cart={cart} totalPrice={totalPrice} onClose={()=> setIsCheckout(false)}/>
            </>
          )}
        </Box>
      </Drawer>
    </div>
  );
}
