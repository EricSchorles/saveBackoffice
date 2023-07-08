"use client"
import { Card } from "@components/Cards";
import { FunctionComponent, useState } from "react";
import { FiUser, FiUsers } from "react-icons/fi";
import { Button } from "@components/Buttons/Button";
import CustomersListing from "./components/CustomersListing";
import { FormCustomer } from "./components/FormCustomers";

interface CustomerProps {

}

interface CardPercentageDetailsProps { value: number | string, percentage: { value: number | string, color: string } }

const CardPercentageDetails = ({ value, percentage }: CardPercentageDetailsProps) => {
    return (
        <div className="flex gap-2">
            <p>{value}</p>
            <p className={`text-red-600 dark:text-red-800`}>{percentage.value}</p>
        </div>
    )
}

const Customer: FunctionComponent<CustomerProps> = () => {

    return (
        <>
            <div className="flex justify-between pb-4">
                <p>Sumário</p>
                <Button typeStyle="edit" className="w-fit h-full">Adicionar Usuário</Button>
            </div>
            <div className="flex gap-4">
                <Card.Root>
                    <Card.Header iconLeft={<FiUsers></FiUsers>}></Card.Header>
                    <Card.Content>
                        <Card.ContentItem title="Todos os usuários" description={<CardPercentageDetails value="1,149" percentage={{ value: "13.55%", color: 'red' }} />} />
                        <Card.ContentItem title="Ativos" description={<CardPercentageDetails value="1,149" percentage={{ value: "13.55%", color: 'red' }} />} />
                        <Card.ContentItem title="Inativos" description={<CardPercentageDetails value="1,149" percentage={{ value: "13.55%", color: 'red' }} />} />
                    </Card.Content>
                </Card.Root>
                <Card.Root>
                    <Card.Header iconLeft={<FiUsers></FiUsers>}></Card.Header>
                    <Card.Content >
                        <Card.ContentItem title="Todos os usuários" description={<CardPercentageDetails value="1,149" percentage={{ value: "13.55%", color: 'red' }} />} />
                        <Card.ContentItem title="Ativos" description={<CardPercentageDetails value="1,149" percentage={{ value: "13.55%", color: 'red' }} />} />
                        <Card.ContentItem title="Inativos" description={<CardPercentageDetails value="1,149" percentage={{ value: "13.55%", color: 'red' }} />} />
                    </Card.Content>
                </Card.Root>
            </div>
            <div>
                <CustomersListing />
            </div>
            <FormCustomer />
        </>
    );
}

export default Customer;
