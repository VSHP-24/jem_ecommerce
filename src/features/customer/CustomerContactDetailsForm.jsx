import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";

import { useDispatch, useSelector } from "react-redux";
import { saveAddress, getUserDetails } from "../user/userSlice";
import { getTotalCartQuantity } from "../cart/cartSlice";
import { useGetCustomer } from "./useGetCustomer";
import { useCreateCustomer } from "./useCreateNewCustomer";

function CustomerContactDetailsForm() {
  const [billingAddress, setBillingAddress] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartQuantity = useSelector(getTotalCartQuantity);
  const userDetails = useSelector(getUserDetails);

  const { isPending, customer } = useGetCustomer(userDetails?.id);
  const { isCreating, createCustomer } = useCreateCustomer();

  const isWorking = isCreating || isPending;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    // VALUES WILL UPDATE THE FORM FIELDS ONCE THE DATA IS FETCHED
    values: { name: userDetails.name, email: userDetails.email, ...customer },
  });

  // IF THE CART IS EMPTY, THIS PREVENTS FROM ACCESSING THE CHECKOUT PAGE
  useEffect(
    function () {
      if (cartQuantity < 1 || !userDetails.id)
        return navigate("/cart", { replace: true });
    },
    [cartQuantity, navigate, userDetails.id],
  );

  async function onSubmit(data) {
    let customerDetails;
    // IF BILLING AND SHIPPING ADDRESS ARE SAME, THIS SETS THE VALUE OF BILLING ADDRESS
    if (data.billingAddressSameAsShippingAddress)
      customerDetails = {
        ...data,
        billingAddress: data.shippingAddress,
        billingCity: data.shippingCity,
        billingState: data.shippingState,
        billingPostCode: data.shippingPostCode,
        billingCountry: data.shippingCountry,
      };
    else customerDetails = { ...data };
    // CUSTOMER PRIMARY AND DELIVERY ADDRESS  CAN BE DIFFERENT , SO THIS SAVES THE DELIVERY ADDRESS IN THE USER SLICE
    dispatch(saveAddress(customerDetails));

    //IF IT'S A NEW CUSTOMER OR IF CUSTOMER DOESN'T HAVE ANY PRIMARY ADDRESS , THIS ADDRESS WILL BE SAVED AS PRIMARY
    const { name, email, ...details } = customerDetails;
    if (!customer.id) createCustomer({ ...details });
  }

  if (!isPending)
    return (
      <form
        className="flex w-full flex-col justify-self-center tablet:max-w-[30rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRow label="Name" error={errors?.name?.message}>
          <input
            type="text"
            id="name"
            placeholder="Enter Name of the Recipient"
            autoComplete="name"
            disabled={isWorking}
            {...register("name", { required: "*This field is required" })}
          />
        </FormRow>

        <FormRow label="Email address" error={errors?.email?.message}>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            autoComplete="username"
            disabled={isWorking}
            {...register("email", { required: "*This field is required" })}
          />
        </FormRow>

        <FormRow
          label="Shipping Address"
          error={errors?.shippingAddress?.message}
        >
          <input
            type="text"
            id="shippingAddress"
            placeholder="Flat, House No., Building , Company , Apartment , Street , Area , Sector , Village"
            disabled={isWorking}
            {...register("shippingAddress", {
              required: "*This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Shipping City" error={errors?.shippingCity?.message}>
          <input
            type="text"
            id="shippingCity"
            placeholder="Town/City "
            disabled={isWorking}
            {...register("shippingCity", {
              required: "*This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Shipping State" error={errors?.shippingState?.message}>
          <input
            type="text"
            id="shippingState"
            placeholder="State"
            disabled={isWorking}
            {...register("shippingState", {
              required: "*This field is required",
            })}
          />
        </FormRow>

        <FormRow
          label="Shipping PostCode"
          error={errors?.shippingPostCode?.message}
        >
          <input
            type="number"
            id="shippingPostCode"
            placeholder="6-digit Pincode "
            disabled={isWorking}
            {...register("shippingPostCode", {
              required: "*This field is required",
            })}
          />
        </FormRow>

        <FormRow
          label="Shipping Country"
          error={errors?.shippingCountry?.message}
        >
          <input
            type="text"
            id="shippingCountry"
            placeholder="Country"
            disabled={isWorking}
            {...register("shippingCountry", {
              required: "*This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Phone Number" error={errors?.shippingPostCode?.message}>
          <input
            type="number"
            id="phoneNumber"
            placeholder="Enter your Phone Number "
            disabled={isWorking}
            {...register("phoneNumber", {
              required: "*This field is required",
            })}
          />
        </FormRow>

        <div className="flex gap-2 text-base">
          <input
            type="checkbox"
            id="billingAddressSameAsShippingAddress"
            value={billingAddress}
            checked={billingAddress}
            onClick={() => setBillingAddress((cur) => !cur)}
            placeholder="Town/City "
            name="billingAddressSameAsShippingAddress"
            disabled={isWorking}
            {...register("billingAddressSameAsShippingAddress")}
          />
          <label htmlFor="billingAddressSameAsShippingAddress">
            Billing Address same as Shipping Address?
          </label>
        </div>

        {!billingAddress && (
          <>
            <FormRow
              label="Billing Address"
              error={errors?.billingAddress?.message}
            >
              <input
                type="text"
                id="billingAddress"
                placeholder="Flat, House No., Building , Company , Apartment , Street , Area , Sector , Village"
                disabled={isWorking}
                {...register("billingAddress", {
                  required: "*This field is required",
                })}
              />
            </FormRow>

            <FormRow label="Billing City" error={errors?.billingCity?.message}>
              <input
                type="text"
                id="billingCity"
                placeholder="Town/City "
                disabled={isWorking}
                {...register("billingCity", {
                  required: "*This field is required",
                })}
              />
            </FormRow>

            <FormRow
              label="Billing State"
              error={errors?.billingState?.message}
            >
              <input
                type="text"
                id="billingState"
                placeholder="State"
                disabled={isWorking}
                {...register("billingState", {
                  required: "*This field is required",
                })}
              />
            </FormRow>

            <FormRow
              label="Billing PostCode"
              error={errors?.billingPostCode?.message}
            >
              <input
                type="number"
                id="billingPostCode"
                placeholder="6-digit Pincode "
                disabled={isWorking}
                {...register("billingPostCode", {
                  required: "*This field is required",
                })}
              />
            </FormRow>

            <FormRow
              label="Billing Country"
              error={errors?.billingCountry?.message}
            >
              <input
                type="text"
                id="billingCountry"
                placeholder="Country"
                disabled={isWorking}
                {...register("billingCountry", {
                  required: "*This field is required",
                })}
              />
            </FormRow>
          </>
        )}

        <FormRow>
          <Button variation="primary" additionalStyles="w-9/12 self-center ">
            {!customer.id ? "Save address" : " Deliver to this address "}
          </Button>
        </FormRow>
      </form>
    );
}

export default CustomerContactDetailsForm;
