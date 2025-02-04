import { useForm } from "react-hook-form";
import Heading from "../../ui/Heading";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { getUserDetails } from "./userSlice";
import { useGetCustomer } from "../customer/useGetCustomer";
import { useState } from "react";
import { useUpdateCustomerContactDetails } from "../customer/useUpdateCustomerContactDetails";
import { useCreateCustomer } from "../customer/useCreateNewCustomer";
import Loader from "../../ui/Loader";
import Spinner from "../../ui/Spinner";

function UserContactDetailsForm() {
  const [isUpdateSession, setIsUpdateSession] = useState(false);
  const [billingAddress, setBillingAddress] = useState(false);

  const userDetails = useSelector(getUserDetails);

  const { isPending, customer } = useGetCustomer();
  const { isCreating, createCustomer } = useCreateCustomer();

  const { isEditing, updateCustomerContactDetails } =
    useUpdateCustomerContactDetails();

  const isWorking = isPending || isEditing || isCreating;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    // VALUES WILL UPDATE THE FORM FIELDS ONCE THE DATA IS FETCHED
    values: { name: userDetails.name, email: userDetails.email, ...customer },
  });

  async function onSubmit(data) {
    // Initially input fields will be disabled , this enables the input field to edit
    if (!isUpdateSession && customer.id) return setIsUpdateSession(true);

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

    //IF IT'S A NEW CUSTOMER OR IF CUSTOMER DOESN'T HAVE ANY PRIMARY ADDRESS , THIS ADDRESS WILL BE SAVED AS PRIMARY
    const { name, email, ...details } = customerDetails;

    // THIS WORKS FOR EXISTING CUSTOMERS
    if (isUpdateSession && customer.id) {
      updateCustomerContactDetails(
        { ...details },
        { onSuccess: setIsUpdateSession(false) },
      );
    }
    // THIS IS FOR NEW CUSTOMERS
    if (!customer.id) {
      createCustomer({ ...details });
    }
  }

  if (isPending) return <Loader />;

  return (
    <div className="flex flex-col gap-8 justify-self-center">
      <Heading as="h4" styles="text-2xl tablet:text-3xl self-center">
        Contact Details
      </Heading>
      <form
        className="flex w-full flex-col justify-self-center tablet:max-w-[60rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRow
          label="Shipping Address"
          error={errors?.shippingAddress?.message}
        >
          <input
            type="text"
            id="shippingAddress"
            placeholder="Flat, House No., Building , Company , Apartment , Street , Area , Sector , Village"
            disabled={isWorking || (!isUpdateSession && customer.id)}
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
            disabled={isWorking || (!isUpdateSession && customer.id)}
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
            disabled={isWorking || (!isUpdateSession && customer.id)}
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
            disabled={isWorking || (!isUpdateSession && customer.id)}
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
            disabled={isWorking || (!isUpdateSession && customer.id)}
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
            disabled={isWorking || (!isUpdateSession && customer.id)}
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
            disabled={isWorking || (!isUpdateSession && customer.id)}
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
                disabled={isWorking || (!isUpdateSession && customer.id)}
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
                disabled={isWorking || (!isUpdateSession && customer.id)}
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
                disabled={isWorking || (!isUpdateSession && customer.id)}
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
                disabled={isWorking || (!isUpdateSession && customer.id)}
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
                disabled={isWorking || (!isUpdateSession && customer.id)}
                {...register("billingCountry", {
                  required: "*This field is required",
                })}
              />
            </FormRow>
          </>
        )}

        <FormRow>
          <Button
            variation="primary"
            additionalStyles="px-4"
            onDisabled={isWorking}
          >
            {!isWorking ? (
              !isUpdateSession && customer.id ? (
                " Update Address "
              ) : (
                "Save Address"
              )
            ) : (
              <Spinner />
            )}
          </Button>
        </FormRow>
      </form>
    </div>
  );
}

export default UserContactDetailsForm;
