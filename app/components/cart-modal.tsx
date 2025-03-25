"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Minus, Plus, ShoppingBag, Trash2, CheckCircle } from "lucide-react"
import Image from "next/image"

// Define cart item type
type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

// Define discount code type
type DiscountCode = {
  code: string
  percentage: number
}

// Valid discount codes
const VALID_DISCOUNT_CODES: DiscountCode[] = [
  { code: "NEWCUSTOMER", percentage: 15 },
  { code: "PETLOVER", percentage: 10 },
  { code: "WELCOME50", percentage: 50 },
]

export default function CartModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [discountCode, setDiscountCode] = useState("")
  const [appliedDiscount, setAppliedDiscount] = useState<DiscountCode | null>(null)
  const [discountError, setDiscountError] = useState("")
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // Calculate discount amount
  const discountAmount = appliedDiscount ? (subtotal * appliedDiscount.percentage) / 100 : 0

  // Calculate total
  const total = subtotal - discountAmount

  // Toggle cart visibility
  const toggleCart = () => setIsOpen(!isOpen)

  // Handle quantity changes
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems((prev) => {
        const new_items =  prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item));
        updateCartCount(new_items);
        return new_items;
      }
    )
  }

  // Remove item from cart
  const removeItem = (id: string) => {
    setCartItems((prev) => {
      const new_items = prev.filter((item) => item.id !== id);
      updateCartCount(new_items);
      return new_items;
    })
  }

  // Apply discount code
  const applyDiscount = () => {
    // Reset previous error
    setDiscountError("")

    // Check if code is empty
    if (!discountCode.trim()) {
      setDiscountError("Please enter a discount code")
      return
    }

    // Find matching discount code
    const discount = VALID_DISCOUNT_CODES.find((d) => d.code.toLowerCase() === discountCode.toLowerCase())

    if (discount) {
      setAppliedDiscount(discount)
      setDiscountError("")
    } else {
      setDiscountError("Invalid discount code")
      setAppliedDiscount(null)
    }
  }

  // Handle checkout
  const handleCheckout = () => {
    // Clear cart and show order confirmation
    console.log("checkout triggered")
    setCartItems([])
    setIsOrderPlaced(true)
    updateCartCount([])
  }

  // Reset order confirmation
  const resetOrderConfirmation = () => {
    setIsOrderPlaced(false)
    setIsOpen(false)
  }

  // Update cart count in header
  const updateCartCount = (cartItems: CartItem[]) => {
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    console.log(cartItems, count)
    const countElements = document.querySelectorAll(".cart-count")
    countElements.forEach((el) => {
      el.textContent = count.toString()
    })
  }

  // Listen for add-to-cart events
  useEffect(() => {
    const handleAddToCart = (event: CustomEvent) => {
      const { plan, price } = event.detail

      // Check if item already exists in cart
      const existingItemIndex = cartItems.findIndex((item) => item.name === plan)

      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        const updatedItems = [...cartItems]
        updatedItems[existingItemIndex].quantity += 1
        setCartItems(updatedItems)
        updateCartCount(updatedItems);
      } else {
        // Add new item if it doesn't exist
        const newItem: CartItem = {
          id: Date.now().toString(),
          name: plan,
          price: price,
          quantity: 1,
          image: "/logo.png",
        }
        setCartItems((prev) => [...prev, newItem])
        updateCartCount([...cartItems, newItem]);
      }

      // Open cart when adding items
      setIsOpen(true)
    }

    // Listen for toggle-cart events
    const handleToggleCart = () => {
      setIsOpen((prev) => !prev)
    }

    // Add event listeners
    window.addEventListener("add-to-cart", handleAddToCart as EventListener)
    window.addEventListener("toggle-cart", handleToggleCart)

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("add-to-cart", handleAddToCart as EventListener)
      window.removeEventListener("toggle-cart", handleToggleCart)
    }
  }, [cartItems])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">
            {isOrderPlaced ? "Order Confirmation" : "Your Cart"}
          </h2>
          <Button variant="ghost" size="icon" onClick={isOrderPlaced ? resetOrderConfirmation : toggleCart} aria-label="Close">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {isOrderPlaced ? (
          // Order Confirmation State
          <div className="text-center py-12 px-4">
            <CheckCircle className="h-20 w-20 mx-auto text-primary-teal mb-6" />
            <h3 className="text-2xl font-bold text-dark-text mb-4">Order Placed Successfully!</h3>
            <p className="text-dark-text/80 mb-6">
              Thank you for your purchase. Your monthly pet box is on its way!
            </p>
            <Button 
              className="bg-golden-yellow hover:bg-golden-yellow/90 text-dark-text"
              onClick={resetOrderConfirmation}
            >
              Continue Shopping
            </Button>
          </div>
        ) : cartItems.length === 0 ? (
          // Empty cart state
          <div className="text-center py-8">
            <ShoppingBag className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-4">Looks like you haven't added any items to your cart yet.</p>
            <Button className="bg-primary-teal hover:bg-primary-teal/90 text-white" onClick={toggleCart}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          // Cart with items
          <div className="p-4">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between pb-4 border-b">
                  <div className="flex items-center">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500">Monthly subscription</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 text-sm flex items-center mt-1 hover:text-red-700"
                      >
                        <Trash2 className="h-3 w-3 mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2 border rounded">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {appliedDiscount && (
                  <div className="flex justify-between mb-2 text-green-600">
                    <span>Discount ({appliedDiscount.percentage}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Discount code"
                      className="flex-1"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                    />
                    <Button variant="outline" onClick={applyDiscount}>
                      Apply
                    </Button>
                  </div>

                  {discountError && <p className="text-red-500 text-sm">{discountError}</p>}

                  {appliedDiscount && (
                    <p className="text-green-600 text-sm">
                      {appliedDiscount.code} applied for {appliedDiscount.percentage}% off!
                    </p>
                  )}

                  <p className="text-gray-500 text-xs">Try discount codes: NEWCUSTOMER, PETLOVER, or WELCOME50</p>
                </div>

                <Button 
                  className="w-full bg-golden-yellow hover:bg-golden-yellow/90 text-dark-text"
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}