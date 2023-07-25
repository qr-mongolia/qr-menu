"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CompanyRegistration = () => {
  const [companyInfo, setCompanyInfo] = useState({
    name: "",
    username: "",
    businessName: "",
    businessType: "",
    businessAddress: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setCompanyInfo((prevCompanyInfo) => ({
      ...prevCompanyInfo,
      [id]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Handle saving the company registration information
    console.log("Company Information:", companyInfo);
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="flex items-center justify-center h-full">
          <Tabs
            defaultValue="businessInfo"
            className="w-[400px]"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="businessInfo">Account</TabsTrigger>
              <TabsTrigger value="content">Password</TabsTrigger>
              <TabsTrigger value="companyDetails">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="businessInfo">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when
                    you&apos;re done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      defaultValue="@peduarte"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="content">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you&apos;ll be
                    logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input
                      id="current"
                      type="password"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input
                      id="new"
                      type="password"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="companyDetails">
              <Card>
                <CardHeader>
                  <CardTitle>Company Details</CardTitle>
                  <CardDescription>
                    Enter your company information here.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      value={companyInfo.businessName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="businessType">Business Type</Label>
                    <Input
                      id="businessType"
                      value={companyInfo.businessType}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="businessAddress">Business Address</Label>
                    <Input
                      id="businessAddress"
                      value={companyInfo.businessAddress}
                      onChange={handleInputChange}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Company Details</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default CompanyRegistration;
