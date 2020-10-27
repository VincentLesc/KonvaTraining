<?php

namespace App\Entity\Landscape;

use App\Repository\Landscape\ItemRepository;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass=ItemRepository::class)
 */
class Item
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $imageName;

    /**
     * NOTE: This is not a mapped field of entity metadata, just a simple property.
     *
     * @Vich\UploadableField(mapping="landscape_item", fileNameProperty="imageName")
     *
     * @var File|null
     */
    private $imageFile;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime")
     *
     * @var DateTimeInterface|null
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isBuildable;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isWalkable;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $walkingLine;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isDrivable;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $drivingLine;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getImageName(): ?string
    {
        return $this->imageName;
    }

    public function setImageName(string $imageName): self
    {
        $this->imageName = $imageName;

        return $this;
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|UploadedFile|null $imageFile
     */
    public function setImageFile(?File $imageFile = null): void
    {
        $this->imageFile = $imageFile;

        if (null !== $imageFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }


    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function getCreatedAt(): ?DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return DateTimeInterface|null
     */
    public function getUpdatedAt(): ?DateTimeInterface
    {
        return $this->updatedAt;
    }

    /**
     * @param DateTimeInterface|null $updatedAt
     */
    public function setUpdatedAt(?DateTimeInterface $updatedAt): void
    {
        $this->updatedAt = $updatedAt;
    }

    public function getIsBuildable(): ?bool
    {
        return $this->isBuildable;
    }

    public function setIsBuildable(bool $isBuildable): self
    {
        $this->isBuildable = $isBuildable;

        return $this;
    }

    public function getIsWalkable(): ?bool
    {
        return $this->isWalkable;
    }

    public function setIsWalkable(bool $isWalkable): self
    {
        $this->isWalkable = $isWalkable;

        return $this;
    }

    public function getWalkingLine(): ?string
    {
        return $this->walkingLine;
    }

    public function setWalkingLine(?string $walkingLine): self
    {
        $this->walkingLine = $walkingLine;

        return $this;
    }

    public function getIsDrivable(): ?bool
    {
        return $this->isDrivable;
    }

    public function setIsDrivable(bool $isDrivable): self
    {
        $this->isDrivable = $isDrivable;

        return $this;
    }

    public function getDrivingLine(): ?string
    {
        return $this->drivingLine;
    }

    public function setDrivingLine(?string $drivingLine): self
    {
        $this->drivingLine = $drivingLine;

        return $this;
    }


}
