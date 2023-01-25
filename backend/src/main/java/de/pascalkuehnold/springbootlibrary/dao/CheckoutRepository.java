package de.pascalkuehnold.springbootlibrary.dao;

import de.pascalkuehnold.springbootlibrary.entity.Checkout;
import de.pascalkuehnold.springbootlibrary.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface CheckoutRepository extends JpaRepository<Checkout, Long> {

    Checkout findByUserEmailAndBookId(String userEmail, Long bookId);

    List<Checkout> findBooksByUserEmail(String userEmail);

}
