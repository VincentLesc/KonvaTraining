<?php

namespace App\Repository;

use App\Entity\Landscape;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Landscape|null find($id, $lockMode = null, $lockVersion = null)
 * @method Landscape|null findOneBy(array $criteria, array $orderBy = null)
 * @method Landscape[]    findAll()
 * @method Landscape[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LandscapeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Landscape::class);
    }

    // /**
    //  * @return Landscape[] Returns an array of Landscape objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('l.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Landscape
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
