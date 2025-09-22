"use client";

import {useEffect, useState} from "react";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@heroui/react";

export default function OneTimePopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasAccepted = localStorage.getItem("accepted_experiment_notice");
        if (!hasAccepted) {
            setIsOpen(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("accepted_experiment_notice", "true");
        setIsOpen(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={setIsOpen}
            size="md"
            backdrop="blur"
            isDismissable={false}
            isKeyboardDismissDisabled={true}
        >
            <ModalContent>
                <ModalHeader className="text-lg font-bold text-red-600">
                    ⚠️ Experimental Notice
                </ModalHeader>
                <ModalBody>
                    <p>
                        This is an experimental version of the website.
                        Some features are not yet complete and currently there is no real data available.
                        Please use it for preview purposes only.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="flat" onPress={handleAccept}>
                        I Understand
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
